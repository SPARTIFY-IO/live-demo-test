import { spartiSuite } from "@spartify.io/spartify-engine";
import { SpartifyLoginPage } from "../pages/SpartifyLoginPage";

const loginPage = new SpartifyLoginPage();

spartiSuite(
  "OrangeHRM Auth Sign-in - Test Suite",
  { tags: ["@reg", "@auth"] },
  () => {
    it("Test - Auth Sign-in with Valid Credentials", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin();
    });

    it("Test - Auth Sign-in with In-Valid Credentials", () => {
      loginPage
        .visitUrl()
        .step_enterUsername("AdminX")
        .step_enterPassword("wrongPassword")
        .step_clickLogin();
    });
  }
);
