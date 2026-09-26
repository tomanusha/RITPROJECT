const{chromium} = require('@playwright/test');
const{test,expect} = require('@playwright/test');
class FacebookLogin{
    constructor(page){
        this.page = page;

//Locators//
this.usernameInput = page.locator[autocomplete="username webauthn"];
this.passwordInput = page.locator[type="password"];
this.clickLogin = page.locator("//div[@aria-label='Log in']");
this.validationMsg = page.getByText('The password you've entered is incorrect');









    }
}