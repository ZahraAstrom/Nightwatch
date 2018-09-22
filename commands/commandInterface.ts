import { NightwatchBrowser } from 'nightwatch';

export interface NightwatchBrowserWithCustomCommands extends NightwatchBrowser {
  loginCommand: (
    browser: NightwatchBrowser,
    email: string,
    password: string
  ) => NightwatchBrowserWithCustomCommands;
}
