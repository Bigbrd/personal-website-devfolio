module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://bigbrd.github.io/personal-website-devfolio/`,
    // Your Name
    name: 'Bryan Dickens',
    // Main Site Title
    title: `Bryan Dickens  | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Amazon software developer manager, former Microsoft Azure engineer. still can't dunk.`,
    // Optional: Twitter account handle
    author: `@brdick`,
    // Optional: Github account URL
    github: `https://github.com/Bigbrd`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/brdickens`,
    medium: 'https://medium.com/@brdick',
    youtube: 'https://www.youtube.com/user/brd102693',
    poker: 'http://pokerdb.thehendonmob.com/player.php?a=r&n=289833',
    paypal: 'https://paypal.me/bryandickens',

    // Content of the About Me section
    about: `Everyone who’s ever taken a shower has an idea. It’s the person who gets out of the shower and does something about it who makes a difference. - Nolan Bushnell
    When I write down my ideas, everything is already finished! - Mozart
    
    My current interests are in Machine Learning, Virtual Reality, App Development, and anything start-up related.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        //TODO figure out how to put more than just github and linkedin and use the cool symbols from my last site
        //IDEA - make blog pages out of the projects then can link to those blog pages (fills up the blog and more room for details there)
        //copy them over in full as separate blog pages, then link to it. grab the images too
        //same with experience (or deeplink into my linkedin)
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon',
        description: 'Software Developer Manager (L6), March 2019 - Present',
        link: '',
      },
      {
        name: 'Microsoft',
        description: 'Program Manager 2, November 2015 - March 2019',
        link: '',
      },
      {
        name: 'Penn State Research',
        description: 'Research Assistant, September 2013 - August 2015',
        link: 'http://www.engineering.com/DesignerEdge/DesignerEdgeArticles/ArticleID/10287/How-Virtual-Reality-can-Improve-Online-Learning.aspx',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
        'Java • Python • TypeScript • C# • Swift • PHP'
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), Microsoft Azure, Microsoft Power BI, Software Design, CI / CD, API design, Agile / Scrum',
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
