const{chromium} = require('@playwright/test');
const assert = require('assert');
class LoginProfilePage{
    constructor(page){
        this.page = page;
//Loactors//
//Login

this.loginButton = page.locator("//a[text()='Login']");
this.usernameInput = page.getByPlaceholder('Enter your active Email ID / Username');
this.passwordInput = page.getByPlaceholder('Enter your password');
this.loginButt = page.locator('[class="btn-primary loginButton"]');
//Complete Profile

this.profileBtn = page.locator('[class="view-profile-wrapper"]');
this.profileName = page.getByText('Ronisha');
this.editBtn = page.locator('//em[text() = "editOneTheme"]');
this.BasicPage = page.locator("//div[text() = 'Basic details']");
this.nameField = page.getByPlaceholder('Enter Your Name');
this.monthField = page.getByPlaceholder('Select month');
this.monthValue = page.locator('[data-id="exp-months-droope_4"]');
this.salaryBD = page.getByPlaceholder('Select salary components');
this.salaryValue = page.getByText('Fixed + Variable + Stocks');
this.areaTown = page.getByPlaceholder('Search area/town');
this.areaValue = page.getByText('Ganapathipuram');
this.saveBtn = page.locator('[id="saveBasicDetailsBtn"]');

}
async goto(){
    await this.page.goto('https://www.naukri.com');
}
async logintestnaukri(username,password){
    await this.loginButton.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButt.click();
}
async profileField(){
await this.profileBtn.click();
}
async verifyMynaukri() {

    await this.profileName.waitFor({
        state: 'visible',
        timeout: 30000
    });

    const visible = await this.profileName.isVisible();

assert.strictEqual(visible, true);
}

async editProfile(){
await this.editBtn.click();
}
async verifyBasicDetails(){
await this.page.waitForTimeout(30000);
const basicDet = await this.BasicPage.isVisible();
assert.strictEqual(basicDet, true);
}
async basicPageFields(Name){
await this.nameField.fill(Name);
await this.monthField.click();
await this.monthValue.click();
await this.salaryBD.click();
await this.salaryValue.click();
await this.areaTown.click();
await this.areaValue.click();
await this.saveBtn.click();

}


}
module.exports=LoginProfilePage;
