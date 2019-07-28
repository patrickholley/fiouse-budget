import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCxueM7GEUHCO_X7k6vce3WDlYbusIdX40",
  authDomain: "fiouse-budgets.firebaseapp.com",
  databaseURL: "https://fiouse-budgets.firebaseio.com",
  projectId: "fiouse-budgets",
  storageBucket: "",
  messagingSenderId: "76038648986",
  appId: "1:76038648986:web:eb3c15b494ded828"
};

class FirebaseService {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.provider = new app.auth.GoogleAuthProvider();

    this.auth.onAuthStateChanged(() => {
      window.dispatchEvent(new CustomEvent("authStateChange", { detail: { user: this.auth.currentUser } }));
    });
  }

  signIn() {
    this.auth.signInWithRedirect(this.provider);
  }

  signOut() {
    this.auth.signOut();
  }
}

const firebase = new FirebaseService();

export default firebase;
