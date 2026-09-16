const{test,expect}=require('@playwright/test');
const LoginPage = require('../BasePage/Pages/LoginPage');

test('Orange Hrm Login Test',async({page})=>{


    const login = new LoginPage(page);

    await login.goto();
    await login.logintest("Admin","admin123");
    await login.verifyDashboard();
    await login.verifyPim();
    await login.PimFields("Greens","Green26");
});