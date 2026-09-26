const { chromium } = require('playwright');
const assert = require('assert');
const LoginProfilePage = require('../BasePage/Pages/LoginProfilePage');

describe('LoginProfileP', function () {

    this.timeout(60000);

    let browser;
    let page;
    let login;

    before(async function () {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        login = new LoginProfilePage(page);
        await login.goto();
    });

    after(async function () {
        await browser.close();
    });

    beforeEach('Take Screenshot before Testcase', async function () {

    await page.screenshot({
        path: `Screenshots/LoginProfilePage/${this.currentTest.title}-before.png`,
        fullPage: true
    });

});

afterEach('Take Screenshot after Testcase', async function () {

    await page.screenshot({
        path: `Screenshots/LoginProfilePage/${this.currentTest.title}-after.png`,
        fullPage: true
    });

});

    it('Login Home Page', async function () {
        await login.logintestnaukri(
            'rsltks1a.anusha@gmail.com',
            'Itkt@1234'
        );
    });
    it('Complete profile',async function(){
        await login.profileField();
    })

    it('ProfileName', async function () {
        await login.verifyMynaukri();
    });

    it('Edit button',async function(){
        await login.editProfile();
    })
    it('Basic Details Page',async function(){
        await login.verifyBasicDetails();
    })
    it('Basic Page Input', async function(){
        await login.basicPageFields('Ronisha gia');
    })

});