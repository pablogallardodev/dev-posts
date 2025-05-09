import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
const { VITE_FIREBASE_CONFIG } = import.meta.env

const PROVIDER_GOOGLE = new GoogleAuthProvider()
const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

initializeApp(firebaseConfig)

const mapToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export function loginGoogle () {
  const auth = getAuth()
  signInWithPopup(auth, PROVIDER_GOOGLE)
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error) })
}

export const onChangeUser = (setUsuario) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    // console.log(user);
    const usuario = user ? mapToUser(user) : null
    setUsuario(usuario)
  })
}

export const onSignOut = () => {
  const auth = getAuth()
  signOut(auth)
}

export const registroUsuario = (formData, setFormData) => {
  const auth = getAuth()

  if (!formData.email || !formData.password) { return }

  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((result) => console.log(result))
    .catch((err) => setFormData({ ...formData, error: handleError(err.code, err.message) }))
}

export const loginUsuario = (formData, setFormData) => {
  const auth = getAuth()
  console.log(formData)
  if (!formData.email || !formData.password) return

  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((result) => console.log(result))
    .catch((err) => setFormData({ ...formData, error: handleError(err.code, err.message) }))
}

function handleError (code, message) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Correo o contraseña incorrectos.'
    case 'auth/user-not-found':
      return 'Correo o contraseña incorrectos.'
    case 'auth/invalid-credential':
      return 'Correo o contraseña incorrectos.'
    case 'auth/invalid-email':
      return 'Por favor valida que el correo electrónico este escrito correctamente.'
    case 'auth/weak-password':
      return 'La contraseña debe tener al menos 6 caracteres.'
    case 'auth/email-already-in-use':
      return 'la dirección de correo electrónico ya se encuentra en uso.'
    default:
      return message
  }
}
