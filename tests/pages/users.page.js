const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        /**
         * $ - one component
         * $$ - array of components
         */
        return browser.react$$('User');
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
            await this.usersList.waitForDisplayed({ timeout: 2000 });
        } catch (error) {
            throw new Error(`Can' load users`);
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if (!usersCount) {
                throw new Error('Users not found');
            }

            await this.usersItems[0].$('#user-delete').click();
            const usersCountAfterDelete = await this.usersItems.length;

            if (usersCount - usersCountAfterDelete !== 1) {
                throw new Error('User was not deleted (or deleted more than 1 user)');
            }
        } catch (error) {
            throw new Error(`Cant delete user. ${error.message}`);
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
