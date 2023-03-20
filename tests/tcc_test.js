const tccPage = require('../pages/tcc_page');
const userDetails = require('../testData/data.json');
const { browser } = require('protractor');

describe('Verify TCC web page', function () {
    beforeEach(function () {
        browser.get(userDetails.baseUrl);
    });

    it('TC_01 - Validate Demo page after submission with user 1', async function () {
        await tccPage.enterUserDetails(userDetails.users[0]);
        await tccPage.verifyPageUrl();
    });

    it('TC_02 - Validate Demo page after submission with user 2', async function () {
        await tccPage.enterUserDetails(userDetails.users[1]);
        await tccPage.verifyPageUrl();
    });
});