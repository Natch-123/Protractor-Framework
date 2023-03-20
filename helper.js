const { browser, protractor, by } = require('protractor')
// const protractorHelper = require('protractor-helper')
const EC = protractor.ExpectedConditions

const helper = function () {
  // this.openPage = async (url) => browser.driver.get(url)
  // this.getPageTitle = async () => browser.driver.getTitle()
  // this.waitForElementToBePresented = async (elementLocator, timeout = 30000) => browser.wait(EC.presenceOf(elementLocator), timeout)
  // this.waitForElementToBeVisible = async (elementLocator, timeout = 30000) => browser.wait(EC.visibilityOf(elementLocator), timeout)
  // this.waitForElementToDisapear = async (elementLocator, timeout = 30000) => {
  // return browser.wait(EC.invisibilityOf(elementLocator), timeout)
  // }
  // this.inputText = async (elementLocator, text, timeout = 5000) => {
  //   await browser.wait(EC.presenceOf(elementLocator), timeout)
  //   await browser.wait(EC.visibilityOf(elementLocator), timeout)
  //   return elementLocator.sendKeys(text)
  // }
  // this.getText = async (elementLocator, timeout = 5000) => {
  //   await browser.wait(EC.presenceOf(elementLocator), timeout)
  //   await browser.wait(EC.visibilityOf(elementLocator), timeout)
  //   return elementLocator.getText()
  // }
  // this.clickBtn = async (elementLocator, timeout = 5000) => {
  //   await browser.wait(EC.presenceOf(elementLocator), timeout)
  //   await browser.wait(EC.elementToBeClickable(elementLocator), timeout)
  //   return elementLocator.click()
  // }

  this.scrollIntoView = async (elementLocator, timeout = 5000) => {
    browser.executeScript(function(elementLocator) {
      elementLocator.scrollIntoView();
    }, elementLocator.getWebElement());
  }
}

module.exports = new helper()
