const TestE2EPage = require('../pages/test.page');

describe('My test page', () => {
    it('should toggle', async () => {
        await TestE2EPage.open();
        await TestE2EPage.toggleTitleWithInput('Vadim');
        await expect(TestE2EPage.testTitle).toBeExisting();
        await TestE2EPage.toggleBtn.click();
        await expect(TestE2EPage.testTitle).not.toBeExisting();
    });

    it('should not toggle', async () => {
        await TestE2EPage.open();
        await TestE2EPage.toggleTitleWithInput('test');
        await expect(TestE2EPage.testTitle).not.toBeExisting();
    });
});
