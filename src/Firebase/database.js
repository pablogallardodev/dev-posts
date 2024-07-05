import { initializeApp } from "firebase/app"
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore"
const { VITE_FIREBASE_CONFIG, VITE_DATABASE_NAME } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const createPost = (post) => addDoc(collection(db, VITE_DATABASE_NAME), post)

export const getAllPosts = async () => {
  const result = await getDocs(collection(db, VITE_DATABASE_NAME))

  const postsData = result.docs.map(document => document.data())

  return postsData
}