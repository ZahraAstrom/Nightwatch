import { NightwatchBrowser } from 'nightwatch';

export interface NightwatchBrowserWithCustomCommands extends NightwatchBrowser {
  loginCommand: (email: string, password: string) => NightwatchBrowserWithCustomCommands;
}
