import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8ehAHx15-Oo_FBEt_J_NMG5rDvYicAY8",
  authDomain: "proyecto-hidroponico-9ea9d.firebaseapp.com",
  databaseURL: "https://proyecto-hidroponico-9ea9d-default-rtdb.firebaseio.com/",
  projectId: "proyecto-hidroponico-9ea9d",
  storageBucket: "proyecto-hidroponico-9ea9d.appspot.com",
  messagingSenderId: "1080749567541",
  appId: "1:1080749567541:web:e953df10935ccc67914b7c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
