import { NightwatchBrowserWithCustomCommands } from '../commands/commandInterface';

module.exports = {
  loginTest: (browser: NightwatchBrowserWithCustomCommands) => {
    browser
      .url(browser.launch_url)
      .loginCommand('zahrateststumblr@mailinator.com', 'testpass123')
      .end();
  }
};
