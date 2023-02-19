import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZ1IvNrjQSvQVQ44-F_nfQl6f2e1X3UQE",
  authDomain: "miniblog-3d3ee.firebaseapp.com",
  projectId: "miniblog-3d3ee",
  storageBucket: "miniblog-3d3ee.appspot.com",
  messagingSenderId: "1006514481408",
  appId: "1:1006514481408:web:3fb4f7c3fb1b44ba36abe5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };