const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder'); // Download Folder Delete icin



module.exports = defineConfig({
  viewportHeight:1200,
  viewportWidth: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', { removeDirectory }) // Delete Download Folder icin

    },

    baseUrl:"https://www.amazon.com" 
  },
});
