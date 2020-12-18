module.exports = {
  author: '@uarmagan',
  siteTitle: 'Ugur Armagan',
  siteShortTitle: 'Ugur Armagan', // Used as logo text in header, footer, and splash screen
  siteDescription: 'Ugur is a software engineer living in Chicago',
  siteUrl: 'http://ugurarmagan.com',
  siteLanguage: 'en_US',
  siteIcon: 'static/favicon.ico', // Relative to gatsby-config file
  social: {
    twitter: `ugurarma`,
    github: `uarmagan`,
    instagram: `uarmagan`,
  },

  navLinks: {
    menu: [
      {
        name: 'Projects',
        url: '/#projects',
      },
      {
        name: 'About',
        url: '/#about',
      },
      {
        name: 'Articles',
        url: '/#articles',
      },
    ],
    button: {
      name: 'Contact',
      url: '/#contact',
    },
  },

  footerLinks: [
    {
      name: 'Privacy',
      url: '/privacy',
    },
    {
      name: 'Imprint',
      url: '/imprint',
    },
  ],
}
