const { element, by, browser } = require('protractor')
const helper = require('../helper');

const tccPage = function () {
    this.elements = {
        txt_FirstName: element(by.xpath('//label[text()="First Name"]/parent::div/div/input')),
        txt_Lastname: element(by.xpath('//label[text()="Last Name"]/parent::div/div/input')),
        txt_Email: element(by.xpath('//label[text()="Email Address"]/parent::div/div/input')),
        txt_StreetAddress: element(by.xpath('//label[text()="Street Address"]/parent::div/div/input')),
        txt_City: element(by.xpath('//label[text()="City"]/parent::div/div/input')),
        txt_ZipCode: element(by.xpath('//label[text()="Zip Code"]/parent::div/div/input')),
        lbl_yesNo: element(by.xpath('//div[@data-question-id-text = "KnockoutLabel"]//span')),
        lbl_AddInfo: element(by.xpath('//div[@data-question-id-text = "NameConfirmation"]//strong')),

        btn_Next: element(by.xpath('//input[@value="Next"]')),

        chkbx_Snap_No: element(by.xpath('//label[contains(text(),"SNAP")]/parent::div//label[text()="No"]')),
        chkbx_Tanf_No: element(by.xpath('//label[contains(text(),"TANF")]/parent::div//label[text()="No"]')),
        chkbx_Military_No: element(by.xpath('//label[contains(text(),"Military")]/parent::div//label[text()="No"]')),
        chkbx_Disability_No: element(by.xpath('//label[contains(text(),"disability")]/parent::div//label[text()="No"]')),
        chkbx_Felony_No: element(by.xpath('//label[contains(text(),"felony")]/parent::div//label[text()="No"]')),
        chkbx_Unemployed_No: element(by.xpath('//label[contains(text(),"unemployed")]/parent::div//label[text()="No"]')),

        btn_Submit: element(by.xpath('//input[@type="submit"]'))
    }

    this.enterUserDetails = async (userDetails) => {
        await this.elements.txt_FirstName.sendKeys(userDetails.fname);
        await this.elements.txt_Lastname.sendKeys(userDetails.lname);
        await this.elements.txt_Email.sendKeys(userDetails.email);
        await this.elements.txt_StreetAddress.sendKeys(userDetails.streetAddress);
        await this.elements.txt_City.sendKeys(userDetails.city);
        await this.elements.txt_ZipCode.sendKeys(userDetails.zip);
        await this.elements.btn_Next.click();
        await expect(this.elements.lbl_yesNo.getText()).toContain('please answer Yes or No');
        await this.elements.chkbx_Snap_No.click();
        await this.elements.chkbx_Tanf_No.click();
        await this.elements.chkbx_Military_No.click();
        await this.elements.chkbx_Disability_No.click();
        await this.elements.chkbx_Felony_No.click();
        helper.scrollIntoView(this.elements.chkbx_Unemployed_No);
        await this.elements.chkbx_Unemployed_No.click();
        await this.elements.btn_Next.click();
        await expect(this.elements.lbl_AddInfo.getText()).toContain('Additional Information');
        await this.elements.btn_Submit.click();
    }

    this.verifyPageUrl = async () => {
        await expect(browser.getCurrentUrl()).toContain('www.experian.com/employer-services/');
    }
}

module.exports = new tccPage();