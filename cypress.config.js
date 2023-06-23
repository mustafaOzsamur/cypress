const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder'); // Download Folder Delete icin



module.exports = defineConfig({
  projectId: '6pgfn2',
  viewportHeight:1200,
  viewportWidth: 1500,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      on('task', { removeDirectory }) // Delete Download Folder icin

    },
    baseUrl:"https://www.amazon.com",


    env:{
      hideXhr:true,
      amazon:"https://www.amazon.de",
      google:"https://www.google.com",
      saucedemo:"https://www.saucedemo.com"
    },
    experimentalWebKitSupport:true,

    experimentalRunAllSpecs: true,

    watchForFileChanges:true, // kaydettikten sonra testlerin otomatik olarak run etmemesi icin
    // aktif hale getirmek icin false yapmak gerekir

    experimentalStudio: true
  },
});
