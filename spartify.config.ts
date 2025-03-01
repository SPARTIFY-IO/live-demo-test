import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins";
import cypressSplit from "cypress-split";
require("dotenv").config();

export default defineConfig({
  e2e: {
    specPattern: "spartify/e2e/**/*.cy.ts",
    supportFile: "spartify/support/e2e.ts",
    fixturesFolder: "spartify/fixtures",
    screenshotsFolder: "spartify-report/screenshots",

    // ===== test project settings start ==== //
    baseUrl: "https://opensource-demo.orangehrmlive.com/",

    // ===== dashboard settings start ==== //
    env: {
      allure: true,
      allureCleanResults: true,
      allureSkipCommands: "wrap,screenshot,wait",
      allureResults: "spartify-report",
      allureAttachRequests: true,
      grepOmitFiltered: true,
      grepFilterSpecs: true,
      apiKey: process.env.SARTIFY_KEY,
    },

    // ===== dev reporter context start ==== //
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "spartify-report/report",
      overwrite: false,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      const reporter = configureAllureAdapterPlugins(on, config);

      // ===== dashboard context start ==== //
      on("before:run", (details) => {
        reporter?.writeEnvironmentInfo({
          info: {
            os: details.system.osName,
            osVersion: details.system.osVersion,
            browser:
              details.browser?.displayName + " " + details.browser?.version,
            ...config.env,
          },
        });
        reporter?.writeCategoriesDefinitions({
          categories: "./allure-error-categories.json",
        });
      });
      // ===== dashboard context end ===== //

      cypressSplit(on, config);
      return config;
    },
  },
});
