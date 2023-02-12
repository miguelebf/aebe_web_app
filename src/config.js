export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const FIREBASE_API = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

export const AWS_API = {
  poolId: 'us-east-1_AOfOTXLvD',
  appClientId: '3eau2osduslvb7vks3vsh9t7b0'
};

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days'
};

export const AUTH0_API = {
  client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
  domain: 'dev-w0-vxep3.us.auth0.com'
};

// ==============================|| THEME CONFIG  ||============================== //

const config = {
  defaultPath: '/exportaciones',
  fontFamily: `'Public Sans', montserrat`,
  i18n: 'en',
  miniDrawer: true,
  container: false,
  mode: 'light',
  presetColor: 'theme7',
  themeDirection: 'ltr'
};

export default config;
