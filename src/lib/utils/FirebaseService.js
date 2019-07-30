import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
    this.database = app.firestore();
    this.provider = new app.auth.GoogleAuthProvider();

    this.auth.onAuthStateChanged(() => {
      this.user = this.auth.currentUser;

      window.dispatchEvent(
        new CustomEvent("authStateChange", {
          detail: { user: this.auth.currentUser }
        })
      );
    });
  }

  createBudget(budgetInfo) {
    const { displayName, uid } = this.user;
    budgetInfo.users = {
      [uid]: {
        uid,
        name: displayName
      }
    };

    return this.database
      .collection("budgets")
      .add(budgetInfo)
      .then(({ id }) => {
        this.database
          .collection("users")
          .doc(uid)
          .set(
            {
              uid,
              name: displayName,
              budgets: {
                [id]: {
                  id,
                  name: budgetInfo.budgetName
                }
              }
            },
            { merge: true }
          )
          .then(() => {
            this.database
              .collection("budgetItems")
              .doc(id)
              .set({});
          });
      });
  }

  getBudgets() {
    return this.database
      .collection("users")
      .doc(this.user.uid)
      .get()
      .then(doc => {
        return doc.exists ? Object.values(doc.data().budgets) : [];
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
