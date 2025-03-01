import {SpartiUI} from "@spartify.io/spartify-engine";
import {SpartifyHomePage} from "./SpartifyHomePage";

/**
 * @class spartify.io sample page-object structure.
 *
 * ```ts
 * run typedoc --help for a list of supported languages
 * const loginPage = new SpartifyLoginPage();
 * ```
 */
export class SpartifyLoginPage {

    private txt_username = '//input[@name="username"]';
    private txt_password = '//input[@name="password"]';
    private btn_login = '//button[@type="submit"]';

    /**
     * Method to set base url
     * @return SpartifyLoginPage()
     */
    public visitUrl() {
        SpartiUI.visit("/"); // Visit the base URL defined in Cypress config
        return this;
    }

    /**
     * Method to enter username
     * @param username - The username to be entered
     * @return SpartifyLoginPage()
     */
    public step_enterUsername(username: string) {
        SpartiUI.textBox(this.txt_username).enterText(username);
        return this;
    }

    /**
     * Method to enter password
     * @param password - The password to be entered
     * @return SpartifyLoginPage()
     */
    public step_enterPassword(password: string) {
        SpartiUI.textBox(this.txt_password).enterText(password);
        return this;
    }

    /**
     * Method to click the login button and re-direct home-page
     * @returns  SpartifyLoginPage()
     */
    public step_clickLogin() {
        SpartiUI.button(this.btn_login).click();
        return new SpartifyHomePage();
    }
}