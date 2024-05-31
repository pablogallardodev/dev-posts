import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const { VITE_FIREBASE_CONFIG } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export function nameDatabase() {
  console.log("firestore name: " + db.app.name)
}