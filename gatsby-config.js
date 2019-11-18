module.exports = {
  siteMetadata: {
    title: `Sports Poll`,
    description: `Dead simple poll system around some sports events which can be fetched from a JSON file`,
    author: `@baptistecs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sports-poll-front-end-gatsby`,
        short_name: `sports-poll`,
        start_url: `/`,
        background_color: `#272727`,
        theme_color: `#272727`,
        display: `minimal-ui`, // standalone ?
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        // crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-typescript",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
