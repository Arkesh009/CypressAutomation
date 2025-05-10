const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  // Setting up the file preprocessor for Cucumber
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Adding a custom task for converting Excel to JSON
  on('task', {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // Reading the Excel file as a Buffer
      });
      return result; // Returning the converted JSON
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,
  },
  projectId: "nodpcq",

  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/examples/*.js', 'cypress/integration/examples/BDD/*.feature']
  },
});