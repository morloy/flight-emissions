module.exports = {
  siteMetadata: {
    title: `Can I afford to fly?`,
    description: `Airplanes cause substantial environmental damage. Could you still afford to fly if you had to pay $200 per ton of CO2 emission? Find out now!`,
    author: `@thrstschfr`,
    image: "https://flight-emissions.com/icons/icon-512x512.png",
  },
  proxy: {
    prefix: "/api",
    url: "https://co2offset.atmosfair.de",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-159807398-1" },
    },
  ],
}
