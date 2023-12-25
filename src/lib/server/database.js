// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSjS_0G_GF-woN1OaAtyiJsNpEqLZ05OA",
  authDomain: "pms52-515dc.firebaseapp.com",
  databaseURL: "https://pms52-515dc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pms52-515dc",
  storageBucket: "pms52-515dc.appspot.com",
  messagingSenderId: "77009085043",
  appId: "1:77009085043:web:0224dacd502b40a5ddc006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export function setData(path, data) {
  set(ref(database, path), data);
}

export function getData(path, callback) {
  onValue(ref(database, path), (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}
