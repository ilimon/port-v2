module.exports = {
  siteTitle: 'Conner Luzier | Software Developer',
  siteDescription:
    'Conner Luzier is a software developer based in Orlando, FL who specializes in developing and designing high-quality websites and applications.',
  siteKeywords:
    'Conner Luzier, Conner, Luzier, cluzier, software developer, front-end developer, web developer, javascript, southeastern',
  siteUrl: 'https://cluzier.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Conner Luzier',
  location: 'Orlando, FL',
  email: 'connerluzier@outlook.com',
  github: 'https://github.com/cluzier',
  twitterHandle: '@conner_luzier',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/cluzier',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/connerluzier',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/cluzier',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/conner_luzier',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/conner_luzier',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
