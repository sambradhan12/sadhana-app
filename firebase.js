// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUbiV0rubS2Or-g7jLzjZrr3Qe0Sogdas",
  authDomain: "sadhana-app-22444.firebaseapp.com",
  databaseURL: "https://sadhana-app-22444-default-rtdb.firebaseio.com",
  projectId: "sadhana-app-22444",
  storageBucket: "sadhana-app-22444.appspot.com",
  messagingSenderId: "529208491345",
  appId: "1:529208491345:web:87da3fa06362d9dceb2770",
  measurementId: "G-7D0DVBY4RQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
navRight.innerHTML = `
  <span>Welcome, ${user.name || "User"}!</span>
  <a href="profile.html" class="btn">Profile</a>
  <a href="#" class="btn" onclick="logout()">Logout</a>
`;
