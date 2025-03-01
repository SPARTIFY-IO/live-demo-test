import { spartiSuite } from "@spartify.io/spartify-engine";
import { SpartifyLoginPage } from "../pages/SpartifyLoginPage";

const loginPage = new SpartifyLoginPage();

spartiSuite(
  "OrangeHRM Home Dashboard - Test Suite",
  { tags: ["@reg", "@home"] },
  () => {
    it("Test - Verify Profile Logout", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_profileOption("Logout");
    });

    it("Test - Verify Given Menu Search Selection", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });
  }
);
