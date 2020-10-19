if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { };
}
const withCSS = require("@zeit/next-css")
const withFonts = require("next-fonts");
const withImages = require("next-images")
const withOffline = require("next-offline")
const withLess = require('@zeit/next-less'),
  nextConfig = {
    //target: 'serverless',
    env: {
      weatherApi: '',
      mapBoxApi: ''
    },
    onDemandEntries: {
      maxInactiveAge: 1000 * 60 * 60,
      pagesBufferLength: 5
    },
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    webpack: config => config
  };

module.exports = withLess(nextConfig);
