const { test, expect } = require('@playwright/test');
const LoginPage = require('../BasePage/Pages/LoginPage');
const LoginData = require('../TestData/testdata.json');

LoginData.forEach((data) => {

    test(`Login test with username ${data.username} and password ${data.password}`, async ({ page }) => {

        let login = new LoginPage(page);

        await login.goto();

        await login.logintest(data.username,data.password);

        console.log("Login Test completed for username: " + data.username + " and password: " + data.password);

    });

});
