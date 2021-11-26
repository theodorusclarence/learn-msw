// !STARTERCONF Change the siteUrl
module.exports = {
  siteUrl: 'https://learn-msw.thcl.dev/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
