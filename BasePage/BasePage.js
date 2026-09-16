const {chromium} = require('playwright/test');

class BasePage{
    constructor(page){
        this.page = page;
    }
async launchBrowser(){
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
}
async closeBrowser(){
    await this.page.close();
}
async gotoUrl(url){
    await this.page.goto(url);
}
async fillInput(locator,value){
    await this.page.locator(locator).fill(value);
}
async clickButton(locator){
await this.page.locator(locator).click();
}
async getTitle(locator){
let title = await this.page.title();
console.log('page title is:' + title)
return title;
}
async getUrl(locator){
let url = await this.page.url();
console.log("page url is:"+ url);
return url;
}
async getText(locator){
let text = await this.page.locator(locator).textContent();
console.log("text is:"+ text);
return text;
}
async dblClickButon(){
    await this.page.locator(locator).dblClick();
}
async hoverButton(locator){
    await this.page.locator(locator).hover();
}
async rightClickButon(){
    await this.page.locator(locator).click({button:'right'});
}
async elementIsVisible(locator){
    await this.page.locator(locator).isVisible();
}

}
module.exports = BasePage;
