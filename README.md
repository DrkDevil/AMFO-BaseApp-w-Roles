# Angular Material Firebase OAuth BaseApp With Roles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.


## Install
Download the project via github. Use your preferred terminal and go to the directory you downloaded the project files.

Run `npm i` to install all dependencies.


## Replace Firebase Account Info
Open the environments.ts file in the environments folder and replace the following code with your firebase credentials.

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: "Your API Key",
    authDomain: "Your Project Domain",
    databaseURL: "Your Project URL",
    projectId: "Your ProjectID",
    storageBucket: "Your Storage Bucket",
    messagingSenderId: "Your MessengerID",
    appId: "Your AppID"
  }
};
```

Make note that the app will not run properly until you have setup your firebase app in the console.
Instructions for that coming soon. 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
