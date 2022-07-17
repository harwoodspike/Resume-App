// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getPerformance } from 'firebase/performance'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: 'portfolio-bf10b.firebaseapp.com',
  databaseURL: "https://portfolio-bf10b-default-rtdb.firebaseio.com",
  projectId: 'portfolio-bf10b',
  storageBucket: 'portfolio-bf10b.appspot.com',
  messagingSenderId: '93515738384',
  appId: '1:93515738384:web:82355995adf44305c9c995',
  measurementId: 'G-1SSN0KH1S1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// @ts-ignore
self.FIREBASE_APPCHECK_DEBUG_TOKEN = "38F12B6B-A0E4-4916-B834-B8E32A6568C9"
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeRI00gAAAAABtX0qvhogHlKGDBdpTTIhRpMiME'),
  isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app)
const database = getFirestore(app)
const rtdb = getDatabase(app)
// getAnalytics(app)
getPerformance(app)
auth.useDeviceLanguage()

// connectAuthEmulator(auth, 'localhost:9099')
// connectFirestoreEmulator(database, 'localhost', 8080)
// connectDatabaseEmulator(rtdb, 'localhost', 9000)

export { auth, database, rtdb }
