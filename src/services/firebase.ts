// src/services/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBvw0AZblNrF9MBlMluq1RN7u3OvuVOoKA',
  authDomain: 'event-magic.firebaseapp.com',
  projectId: 'event-magic',
  storageBucket: 'event-magic.firebasestorage.app',
  messagingSenderId: '885823463712',
  appId: '1:885823463712:web:7f83d871b098ef50b47745',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
