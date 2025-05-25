export interface AppSettings {

  sidenavOpened: boolean;
  sidenavCollapsed: boolean;
  superUserName : string;
  superUserPass : string;
}

export const defaults: AppSettings = {
  sidenavOpened: false,
  sidenavCollapsed: false,
  superUserName : "SuperAdmin",
  superUserPass : "SuperAdmin@CMS",
};
