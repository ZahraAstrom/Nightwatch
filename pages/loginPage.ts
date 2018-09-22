import { Nightwatch, NightwatchAPI, NightwatchBrowser } from 'nightwatch';

export interface LoginPage extends NightwatchBrowser {
  login: (email: string, password: string) => NightwatchAPI;
}

const loginCommands = {
  login(this: Nightwatch, email: string, password: string) {
    return this.api
      .waitForElementVisible(self.elements.firstLoginBtn.selector)
      .click(self.elements.firstLoginBtn.selector)
      .waitForElementVisible(self.elements.emailInput.selector)
      .setValue(self.elements.emailInput.selector, email)
      .click(self.elements.nextBtn.selector)
      .elements('css selector', self.elements.usePassBtn.selector, result => {
        if (result.status !== -1) {
          this.api
            .waitForElementVisible(self.elements.usePassBtn.selector)
            .click(self.elements.usePassBtn.selector);
        }
      })
      .waitForElementVisible(self.elements.pwdInput.selector)
      .setValue(self.elements.pwdInput.selector, password)
      .click(self.elements.pwdLoginBtn.selector);
  }
};

const self = (module.exports = {
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input#signup_determine_email'
    },
    firstLoginBtn: {
      selector: '#signup_login_button span.signup_get_started_btn'
    },
    nextBtn: {
      selector: 'span.signup_determine_btn.active'
    },
    pwdInput: {
      selector: 'input#signup_password'
    },
    pwdLoginBtn: {
      selector: 'span.signup_login_btn'
    },
    usePassBtn: {
      selector:
        'div.signup_view.magiclink.active div.magiclink_password_container a.forgot_password_link'
    }
  }
});
