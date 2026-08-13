const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

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
    baseUrl: 'https://practicesoftwaretesting.com',

    setupNodeEvents: async (on, config) => {
      // Cucumber plugin with tag support
      const tags = config.env.tags;
      await addCucumberPreprocessorPlugin(on, config, {
        omitFiltered: true,
        filterSpecs: true,
      });

      // Esbuild bundler for Cucumber
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Support tag filtering through environment variable
      if (tags) {
        config.env.TAGS = tags;
      }

      return config;
    },
  },
});
