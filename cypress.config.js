const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1200,
  viewportWidth: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },

    baseUrl:"https://www.amazon.com" 
  },
});
