module.exports = {
  siteMetadata: {
    title: `Keycapsss Help Site`,
    titleTemplate: '%s · Keycapsss Help Site',
    description:
      'Build-Guides, FAQ and other related information for Keycapsss products.',
    url: 'https://keycapsss.com', // No trailing slash allowed!
    image: '/keycapsss.jpg', // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: '@keycapsss',
    author: `Keycapsss`,
  },
  pathPrefix: `/help`,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`,
              className: `anchorIcon`,
              isIconAfterHeader: true,
              removeAccents: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              prompt: {
                user: 'ben',
                host: 'localhost',
                global: true,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `kimiko`, // used for the slug
        remote: `https://github.com/Keycapsss/Kimiko.git`,
        branch: `master`,
        // patterns: [`**/*`, `!LICENSE`],
        patterns: [`buildguide_en.md`, `img/*`],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `lily58l`, // used for the slug
        remote: `https://github.com/Keycapsss/Lily58L-Build-Guide.git`,
        branch: `master`,
        // patterns: [`**/*`, `!LICENSE`],
        patterns: [`buildguide_en.md`, `img/*`],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `plaid-pad`, // used for the slug
        remote: `https://github.com/Keycapsss/Plaid-Pad.git`,
        branch: `master`,
        // patterns: [`**/*`, `!LICENSE`],
        patterns: [`buildguide_en.md`, `img/*`],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `reviung41`, // used for the slug
        remote: `https://github.com/Keycapsss/reviung41-build-guide.git`,
        branch: `master`,
        // patterns: [`**/*`, `!LICENSE`],
        patterns: [`buildguide_en.md`, `img/*`],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
