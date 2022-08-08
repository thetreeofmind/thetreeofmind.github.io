module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'The Tree of Mind',
    siteUrl: 'https://thetreeofmind.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: '1a7cf2604ecd7b17888fe39d487225bda7d8de40'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'thetreeofmind.com',
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Tree of Mind',
        short_name: 'The Tree of Mind',
        description: 'The Tree of Mind',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: '/images/favicon-tab.png',
            sizes: '48x48',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-',
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ]
};
  