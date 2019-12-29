---
path: "/writings/heroku-vs-digitalocean/handling-redirects-with-digitalocean"
date: "2019-12-17"
title: "Heroku vs DigitalOcean: Handling Redirects with DigitalOcean"
---

I asked for total control and I got total control. One of the first issues I came across was that my site was no longer reading my `.htaccess` file. I had all these lovely redirects for previous blogs, `non-www` traffic, etc. Welp…all gone. I was so used to [MediaTemple](http://bit.ly/2hnP7tF) handling that for me. Well, those days are gone now that I’m on [DigitalOcean](https://m.do.co/c/0d5110e21375), or at least until the end of my 30 days are over.

<figure>
<img src="/images/image-ph.jpg"
     alt="Image" />
</figure>

I had to get my hands dirty if I wanted to get my redirects back in order. That meant turning to DigitalOcean’s documentation. Apache does not allow `.htaccess` files to override things out the box. Not sure why. I’m sure it’s a good reason but that reason is beyond me. Again…I’m not a DevOps guys. You can do this one of a few ways: via the command line or FTP into your Droplet and navigate to `/etc/apache2/apache2.conf`. I chose the latter. But also not that you STILL will need to access your Droplet via command line so that you can restart Apache and enable `mod_rewrite`.

Towards the bottom of apache2.conf you want to add the following:

```
<Directory /var/www/html/>
    AllowOverride All
</Directory>
```

Save this out, turn to the command line if you are not already there and [SSH into your Droplet](https://www.digitalocean.com/community/tutorials/how-to-connect-to-your-droplet-with-ssh). You’re going to need `mod_rewrite` so that WordPress can use permalinks and various other reasons. To enable `mod_rewrite` insert the following after you’ve logged into your Droplet via SSH:

```
sudo a2enmod rewrite
```

You can run sudo apache2ctl configtest to ensure that you haven’t made any syntax errors. You should see Syntax OK. If you see the following, that’s fine:

```
AH00558: apache2: Could not reliably determine the server’s fully qualified domain name, using 127.0.1.1. Set the ‘ServerName’ directive globally to suppress this message
```

If you want to suppress this message, we will need to open the main configuration file:

```
sudo nano /etc/apache2/apache2.conf
```

At the bottom of this file you will need to add what’s called a `ServerName` directive pointing to your domain (or IP Address if you have not set up your domain yet).

```
ServerName replace_this_with_your_server_domain_or_IP_here
```

Save and close the file when you are finished. You can re-run `sudo apache2ctl configtest` and you should not get that long message above `Syntax OK`.

Last but not least, restart Apache.

```
sudo systemctl restart apache2
```

Pretty intense, right? Well, that was just the beginning. You still have to add rules to `000-default-le-ssl.conf` if you installed a SSL Certificate! Like I said before: if you are scared of the command line or running things yourself, run away!!!

Navigate to `/etc/apache2/sites-available/000-default-le-ssl.conf` in you FTP client or open it up in the command line by typing `sudo nano /etc/apache2/sites-available/000-default-le-ssl.conf.` We want to add rewrite rules in here. You could enable `.htaccess` files and do it that way but since I have control over config files, I figured I’d do it this way.

```
RewriteEngine On
RewriteCond %{HTTP_HOST}   !^www\.example\.com [NC]
RewriteRule ^/(.*)         https://www.example.com/$1 [L,R]
```

Replace `example.com` with your own domain. If you are looking to use a `non-www` URL for your site, remove the `www` from the block above. Save the file and restart Apache.

```
sudo systemctl restart apache2
```

Again, not for the faint at heart. If you are having issues yourself, I suggest you refer to DigitalOcean’s amazing documentation for more help.
