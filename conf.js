// conf.js
const jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const specReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  directConnect: true,
  getPageTimeout: 100000,
  allScriptsTimeout: 300000,
  capabilities: {
    shardTestFiles: true,
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    chromeOptions: {
      excludeSwitches: ['enable-logging']
    }
  },
  framework: 'jasmine',
  specs: ['./tests/tcc_test.js'],

  onPrepare: () => {
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(
      new jasmine2HtmlReporter({
        savePath: './reports',
        cleanDestination: false,
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: false,
        fileNameDateSuffix: true,
        consolidateAll: true
      }));
    jasmine.getEnv().addReporter(new specReporter({
      spec: {
        displayStacktrace: 'raw'
      },
      summary: {
        displayDuration: false
      }
    }));
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 2500000
  }
}