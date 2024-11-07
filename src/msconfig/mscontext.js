import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./msauthConfig.js";
// const updateMsConfig = {
// auth 
// : 
// {clientId: 'f9371469-a50e-4208-ac3c-948afce85a86', authority: 'https://login.microsoftonline.com/common', redirectUri: 'https://cmspfxapp.azurewebsites.net', postLogoutRedirectUri: 'https://cmspfxapp.azurewebsites.net'},
// cache
// : 
// {cacheLocation: 'localStorage', storeAuthStateInCookie: false},
// system
// : 
// {iframeHashTimeout: 10000}
// }
const msalInstance = new PublicClientApplication(msalConfig);
let ACCESS_TOKEN=null;
if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}
msalInstance.addEventCallback((event) => {
  if (
    (event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS) &&
    event.payload.account 
  ) {
    msalInstance.setActiveAccount(event.payload.account);
    ACCESS_TOKEN = event.payload.accessToken;
  }
});

export const getContext = () => {
  return msalInstance;
}
