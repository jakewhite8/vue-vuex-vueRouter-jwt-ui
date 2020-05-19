// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'navbar e2e tests': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.navbar')
      .assert.containsText('#nav-bar-login-button', 'Login')
      .assert.elementCount('img', 1)
      .end();
  },

  'example e2e test using a custom command': (browser) => {
    browser
      .openHomepage()
      .assert.elementPresent('#nav-bar-login-button')
      .end();
  },
};
