import { NightwatchBrowser, NightwatchTestFunctions } from 'nightwatch';
import { NightwatchBrowserWithCustomCommands } from '../commands/commandInterface';

module.exports = {
  afterEach: (browser: NightwatchBrowserWithCustomCommands, done: () => void) => {
    browser.end(() => {
      done();
    });
  },
  beforeEach: (browser: NightwatchBrowserWithCustomCommands) => {
    browser.url(browser.launch_url);
  }
};

(() => {
  const credentials = [
    { user: 'zahrateststumblr@mailinator.com', pass: 'testpass123' },
    { user: 'zahrateststumblr@mailinator.com', pass: 'fakepass123' },
    { user: 'notanemail', pass: 'testpass123' },
    { user: 'tumblrfailtest@mailinator.com', pass: 'testpass123' }
  ];

  const testFunction = (browser: NightwatchBrowserWithCustomCommands, loginObject: UserLogin) => {
    browser.loginCommand(loginObject.user, loginObject.pass);
  };

  const createTests = (testObject: NightwatchTestFunctions, testCases: UserLogin[]) => {
    const generateTest = (loginObject: UserLogin) => {
      return (browser: NightwatchBrowser) => {
        testFunction(browser as NightwatchBrowserWithCustomCommands, loginObject);
      };
    };

    const zipper = (testCase: UserLogin) => {
      testObject[`${testCase.user} : ${testCase.pass}`] = generateTest(testCase);
    };

    testCases.forEach(zipper);
  };

  createTests(module.exports, credentials);
})();

interface UserLogin {
  user: string;
  pass: string;
}
