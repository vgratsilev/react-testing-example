const Page = require('./page');

class TestE2EPage extends Page {
    get toggleBtn() {
        return $('#toggle');
    }

    get searchInput() {
        return $('#search');
    }

    get testTitle() {
        return $('#test');
    }

    async toggleTitleWithInput(text) {
        await this.searchInput.setValue(text);
        await this.toggleBtn.click();
    }

    open() {
        return super.open('/teste2e');
    }
}

module.exports = new TestE2EPage();
