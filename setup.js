const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

module.exports = function () {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
}
