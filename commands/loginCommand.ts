import { NightwatchBrowser } from 'nightwatch';
import { LoginPage } from '../pages/loginPage';

exports.command = function(this: NightwatchBrowser, email: string, password: string) {
  const loginPage = this.page.loginPage() as LoginPage;
  loginPage.login(email, password);
  const dashboardPage = this.page.dashboardPage();
  dashboardPage.waitForElementVisible('@postBtns');
};
