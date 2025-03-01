import {SpartiUI} from "@spartify.io/spartify-engine";

/**
 * @class spartify.io sample panel-object structure.
 *
 * ```ts
 * run typedoc --help for a list of supported languages
 * const homePage = new SpartifySidePanel();
 * ```
 */
export class SpartifySidePanel{

    private txt_search = "//input[@placeholder='Search']";
    private btn_menu = "//ul[@class='oxd-main-menu']//span"

    /**
     * Search and find menu option
     * @param options - The menu option selection
     * @return void
     */
    public step_searchOption(options: string) {
        SpartiUI.textBox(this.txt_search).enterText(options);
        SpartiUI.wait(3000)
        // @ts-ignore - sample usage of cypress pure scripting
        SpartiUI.button(this.btn_menu).clickFirst();
    }
}