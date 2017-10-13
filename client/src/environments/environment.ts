// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


//Original
// export const environment = {
//   production: false,
//   BASEURL: 'http://localhost:3000',
//   firebase: {
//     apiKey: "AIzaSyCVTosLLjsm_Q8g2G98lH1rMBt7cuAaMKM",
//     authDomain: "tripmate-89b3c.firebaseapp.com",
//     databaseURL: "https://tripmate-89b3c.firebaseio.com",
//     projectId: "tripmate-89b3c",
//     storageBucket: "",
//     messagingSenderId: "544411279165"
//   }
// };
//Nuevo Chungo
export const environment = {
  production: true,
  BASEURL: '',
  firebase: {
    apiKey: "AIzaSyCVTosLLjsm_Q8g2G98lH1rMBt7cuAaMKM",
    authDomain: "tripmate-89b3c.firebaseapp.com",
    databaseURL: "https://tripmate-89b3c.firebaseio.com",
    projectId: "tripmate-89b3c",
    storageBucket: "",
    messagingSenderId: "544411279165"
  }
};
