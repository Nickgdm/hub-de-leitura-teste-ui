const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: "http://localhost:3000/",
    projectId: "bqzib9",
    video: true
  },
});
