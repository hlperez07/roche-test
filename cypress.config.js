const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-bootcamp.github.io/react-wines-101',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
