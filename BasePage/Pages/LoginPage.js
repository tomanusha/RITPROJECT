const { expect } = require("@playwright/test");

class LoginPage{

    constructor(page){

        this.page=page;

        //Locators

        //Login

       this.userNameInput = page.locator("//input[@placeholder='Username']");
       this.passWordInput = page.locator("input[name='password']");
       this.loginBtn = page.locator("//button[text()=' Login ']");
       this.dashboard = page.locator("//h6[text()='Dashboard']")
     
       //PIM
       this.pimLink = page.locator("(//a[@class = 'oxd-main-menu-item'])[2]");
       this.pimTitle = page.locator("//h6[contains(@class, 'oxd-text oxd-text')]");
       this.empName = page.locator('(//input[@placeholder="Type for hints..."])[1]');
       this.empId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
       this.empStatus = page.locator('(//i[contains(@class,"oxd-icon bi-caret")])[3]');
       this.includes = page.locator('(//div[@class="oxd-select-text-input"])[2]');
      // this.supName = page.locator('(//input[@placeholder="Type for hints..."])[2]');
       this.jobTitle = page.locator('(//div[@class="oxd-select-text-input"])[3]');
       this.subUnit = page.locator('(//div[@class="oxd-select-text-input"])[4]');
       this.searchBtn = page.getByRole('button',{name:'Search'});
       this.noRecords = page.locator('[id="oxd-toaster_1"]');

    }

    async goto(){

       await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async logintest(username,password){

        await this.userNameInput.fill(username);
        await this.passWordInput.fill(password);
        await this.loginBtn.click();

    }

    async verifyDashboard(){

        await expect(this.dashboard).toBeVisible();

        // if(dashboard.isVisible){

        // console.log(dashboard.textContent())
        // }


    }
   async verifyPim(){
    await this.pimLink.click();
    await expect(this.pimTitle).toBeVisible();
   }
   async PimFields(EmployeeName, EmployeeId, SupervisorName){
    await this.empName.fill(EmployeeName);
    await this.empId.fill(EmployeeId);
    await this.empStatus.click();
    await this.page.getByRole('listbox').getByText('Full-Time Contract').click();
    await this.includes.click();
    await this.page.getByRole('listbox').getByText('Current and Past Employees').click();
    // await this.supName.fill(SupervisorName);
    await this.jobTitle.click();
    await this.page.getByRole('listbox').getByText('Account Assistant').click();
    await this.subUnit.click();
    await this.page.getByRole('listbox').getByText('Administration').click();
    await this.searchBtn.click();
    await expect(this.noRecords).toContainText('No Records Found');


   }
    

   }



module.exports=LoginPage;