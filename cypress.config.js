const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  allowCypressEnv: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/html-reports',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: 'https://practiceofswtesting.com',

    setupNodeEvents: async (on, config) => {
      // Cucumber plugin with tag support
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
