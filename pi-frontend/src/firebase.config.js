import {getApp, getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoJDyw2CbtbSYB8WtmtyPIAZaHcZpb7S4",
  authDomain: "pi-frontend-88d17.firebaseapp.com",
  databaseURL: "https://pi-frontend-88d17-default-rtdb.firebaseio.com",
  projectId: "pi-frontend-88d17",
  storageBucket: "pi-frontend-88d17.appspot.com",
  messagingSenderId: "193322082056",
  appId: "1:193322082056:web:bc1c686bcdd276f0a516bd"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage,};
export const auth = getAuth(app);
