import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../config/firebase'
import { useAuth } from '@vueuse/firebase'

firebase.initializeApp(firebaseConfig)

export const { auth } = firebase

export const { isAuthenticated, user } = useAuth()

const { GoogleAuthProvider } = auth

export const signIn = (email, password) =>
  auth().signInWithEmailAndPassword(email, password)

export const signUp = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password)

export const googlePopup = () =>
  auth().signInWithPopup(new GoogleAuthProvider())

export const signOut = () => auth().signOut()
