import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, addDoc, collection, query, orderBy, doc, getDoc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore'
const { VITE_FIREBASE_CONFIG, VITE_DATABASE_NAME } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const userAuth = getAuth()

export const createPost = (post) => addDoc(collection(db, VITE_DATABASE_NAME), post)

export const getAllPosts = async (setPosts) => {
  const currentEmail = userAuth.currentUser.email
  const q = query(collection(db, VITE_DATABASE_NAME), orderBy('creation_date', 'desc'))
  // const result = await getDocs(q)

  onSnapshot(q, (querySnapshot) => {
    const posts = querySnapshot.docs.map(document => ({
      key: document.id,
      isReaction: document.data().reactions.includes(currentEmail),
      ...document.data()
    }))

    setPosts(posts)
  })
}

export const addReaction = async (key) => {
  const docReference = doc(db, VITE_DATABASE_NAME, key)
  const currentEmail = userAuth.currentUser.email
  const currentDoc = await getDoc(docReference)

  // validamos si existe el documento
  if (!currentDoc.exists()) return

  // Si existe recuperamos las reacciones
  const { reactions } = currentDoc.data()

  // Si el usuario actual existe en las reacciones lo eliminamos, caso contrario lo añadimos
  if (reactions.includes(currentEmail)) {
    await updateDoc(docReference, {
      reactions: arrayRemove(currentEmail)
    })
  } else {
    await updateDoc(docReference, {
      reactions: arrayUnion(currentEmail)
    })
  }
}

export const saveComment = async (key, comment) => {
  const docReference = doc(db, VITE_DATABASE_NAME, key)
  const currentEmail = userAuth.currentUser.email
  const currentDoc = await getDoc(docReference)

  // validamos si existe el documento
  if (!currentDoc.exists()) return

  const newComment = {
    user: currentEmail,
    date: new Date().toLocaleDateString(),
    comment
  }

  await updateDoc(docReference, {
    comments: arrayUnion(newComment)
  })
}
