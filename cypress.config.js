const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const {preprendTransformerToOptions,} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require("exceljs");

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

  on('task', {
    async writeExcelTest({ searchText, replaceText, change, filePath }) {

      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet("Sheet1");
      const output = await readExcelTest(worksheet, searchText);

      const cell = worksheet.getCell(output.row, output.column + change.colChange);
      cell.value = replaceText;
      await workbook.xlsx.writeFile(filePath)
    }
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

async function setupNodeEvents(on, config) {

  async function readExcelTest(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rownumber) => {
      row.eachCell((cell, colNumber) => {
        if (cell.value === searchText) {
          output.row = rownumber;
          output.column = colNumber;
        }
      });
    });
    return output;
  }

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