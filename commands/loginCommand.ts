import { NightwatchBrowser } from 'nightwatch';
import { LoginPage } from '../pages/loginPage';

exports.command = (browser: NightwatchBrowser, email: string, password: string) => {
  const loginPage = browser.page.loginPage() as LoginPage;
  loginPage.login(email, password);
  const dashboardPage = browser.page.dashboardPage();
  dashboardPage.waitForElementVisible('@postBtns');
};
