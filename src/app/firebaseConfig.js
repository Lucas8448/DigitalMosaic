import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAaYzjUUnZpU0Fr5aCPiU18pJnBJGuan8Q",
  authDomain: "digitalmosaic-110dd.firebaseapp.com",
  projectId: "digitalmosaic-110dd",
  storageBucket: "digitalmosaic-110dd.appspot.com",
  messagingSenderId: "190571758585",
  appId: "1:190571758585:web:472060a97dfbfe80eff328",
  measurementId: "G-Y1QQQ17JCX",
  databaseURL: "https://digitalmosaic-110dd-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
