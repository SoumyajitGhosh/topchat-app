// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import constants from "expo-constants";

const firebaseConfig = {
  apiKey: constants.expoConfig.extra.apiKey,
  authDomain: constants.expoConfig.extra.authDomain,
  projectId: constants.expoConfig.extra.projectId,
  storageBucket: constants.expoConfig.extra.storageBucket,
  messagingSenderId: constants.expoConfig.extra.messagingSenderId,
  appId: constants.expoConfig.extra.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
