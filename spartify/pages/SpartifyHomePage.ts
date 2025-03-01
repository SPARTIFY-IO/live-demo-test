import {SpartiUI} from "@spartify.io/spartify-engine";
import {SpartifySidePanel} from "./panels/SpartifySidePanel";

/**
 * @class spartify.io sample page-object structure.
 *
 * ```ts
 * run typedoc --help for a list of supported languages
 * const homePage = new SpartifyHomePage();
 * ```
 */
export class SpartifyHomePage{

    private btn_profile = '(//img[@alt="profile picture"])[1]';

    private sidePanel;

    // Load supporting re-usable panels to launch complete screen
    constructor() {
        this.sidePanel = new SpartifySidePanel();
    }


    /**
     * Search and find menu option
     * @param options - The menu option selection
     * @return void
     */
    public step_searchOption(options: string) {
        this.sidePanel.step_searchOption(options);
        return this;
    }

    /**
     * Dynamic element binding for choose profile option
     * @param options - The profile option selection
     * @return SpartifyHomePage()
     */
    public step_profileOption(options: string) {
        SpartiUI.button(this.btn_profile).click();
        SpartiUI.button("//ul[@role='menu']//a[contains(text(), '"+options+"')]").click();
        return this;
    }
}