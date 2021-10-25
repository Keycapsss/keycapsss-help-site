module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `gatsby-keycapsss-faq`,
    author: `Keycapsss`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchorIcon`,
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `buildguide/lily58`, // used for the slug
        remote: `https://github.com/Keycapsss/Lily58L-Build-Guide.git`,
        branch: `master`,
        // patterns: [`**/*`, `!LICENSE`],
        patterns: [`buildguide_en.md`],
      },
    },
  ],
}
