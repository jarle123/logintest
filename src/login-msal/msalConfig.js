import * as msal from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '1d6489cd-2c77-4425-a677-7bc297747e31',
        authority: 'https://login.microsoftonline.com/common/',
    },
};

export const loginRequest = {
    scopes: ['User.Read'],
};

// msalInstance.loginPopup({
//     redirectUri: "http://localhost:3000/blank.html"
// })
