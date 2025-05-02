const { defineConfig } = require("cypress");
 
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
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    
    specPattern: 'cypress/integration/examples/*.js'
  },
});