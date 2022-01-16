require("dotenv").config({
  path: `.env`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Standing Dreams`,
    description: `UI Engineer with designer chops. Husband. Dad. Sneakerhead. Creator of Tweenshot. Working @ SalesLoft.`,
    author: `Douglas Rogers: @codeOvrCoffee`,
    siteUrl: `https://www.standingdreams.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: `${process.env.TYPEKIT_ID}`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writings`,
        path: `${__dirname}/src/writings`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.REPO_NAME}`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver:
          ({ node, key, value }) =>
          docs =>
            `/${docs.uid}`,
        schemas: {
          home: require("./src/schemas/home.json"),
          portfolio: require("./src/schemas/portfolio.json"),
          film: require("./src/schemas/film.json"),
          colophon: require("./src/schemas/colophon.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `${process.env.GOOGLE_TRACKING_ID}`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: frontmatter___date}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                      }
                      fields {
                        slug
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Standing Dream: RSS Feed",
          },
        ],
      },
    }
  ],
}
