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

  addBudgetItem(budgetItem) {
    // return this.database.collection("budgetItems").set();
  }

  addToDoc = (name, value) => this.database.collection(name).add(value);

  createBudget(budgetInfo) {
    const { displayName, uid } = this.user;

    const budgetToAdd = {
      ...budgetInfo,
      users: {
        [uid]: {
          name: displayName,
          uid
        }
      }
    };

    return this.addToDoc("budgets", budgetToAdd).then(({ id }) => {
      this.setToDoc("budgets", id, { id }).then(() => {
        const updatedUser = {
          uid,
          name: displayName,
          budgets: {
            [id]: { name: budgetInfo.budgetName }
          }
        };

        this.setToDoc("users", uid, updatedUser).then(() => {
          this.setToDoc("budgetItems", id, {});
        });
      });
    });
  }

  getBudgetItems = budget => this.getFromDoc("budgetItems", budget.id);

  getBudgets = () => this.getFromDoc("users", this.user.uid);

  getFromDoc = (name, id) =>
    this.database
      .collection(name)
      .doc(id)
      .get()
      .then(doc => (doc.exists ? doc.data() : {}));

  signIn() {
    this.auth.signInWithRedirect(this.provider);
  }

  signOut() {
    this.auth.signOut();
  }

  setToDoc = (name, id, value) =>
    this.database
      .collection(name)
      .doc(id)
      .set(value, { merge: true });
}

const firebase = new FirebaseService();

export default firebase;
