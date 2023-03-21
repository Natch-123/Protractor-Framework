const { browser, protractor, by } = require('protractor')
const helper = function () {
  

  this.scrollIntoView = async (elementLocator, timeout = 5000) => {
    browser.executeScript(function(elementLocator) {
      elementLocator.scrollIntoView();
    }, elementLocator.getWebElement());
  }
}

module.exports = new helper()
