module.exports = {
  siteMetadata: {
    title: "Black Rock Editions",
    author: `Black Rock Editions`,
    description: `The website for the art printing company Black Rock Editions`,
    siteUrl: `https://gatsby-wordpress-netlify-production.netlify.com`,
    social: {
      twitter: `blackrockeditions`,
    },
    postPrefix: "/blog",
    pagePrefix: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "http://localhost:5678/graphql",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // The base url to your WP site.
        baseUrl: "localhost:5678",
        // baseUrl: 'data.justinwhall.com',
        // baseUrl: 'wpgatsby.wtf',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: "http",
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        excludedRoutes: ["/*/*/comments", "/yoast/**", "/oembed/*"],
        normalizer({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Inter"],
          urls: ["/fonts/inter.css"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
