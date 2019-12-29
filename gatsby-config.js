require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Standing Dreams`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f45e2c`,
        theme_color: `#f45e2c`,
        display: `minimal-ui`,
        icon: `src/images/sd-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: `${process.env.TYPEKIT_ID}`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writings`,
        path: `${__dirname}/src/writings`,
      }
    },
    `gatsby-transformer-remark`,
  ],
}
