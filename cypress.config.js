const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/html-reports',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});