/**
 * Initializes Firebase application and exports Firestore and Authentication instances.
 * 
 * @module firebase
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


/**
 * Firebase configuration object
 * @constant
 */
const firebaseConfig = {
	apiKey: "AIzaSyAMoWsiqq4NrVjoiknTKkUSLotdBGAco6I",
	authDomain: "hrnet-back.firebaseapp.com",
	projectId: "hrnet-back",
	storageBucket: "hrnet-back.appspot.com",
	messagingSenderId: "572243969716",
	appId: "1:572243969716:web:193002f554cd09c97579e1",
};

/**
 * Firebase application instance
 * @constant
 */
const app = initializeApp(firebaseConfig);

/**
 * Exported Firestore instance
 * @constant
 */
export const db = getFirestore(app);

/**
 * Exported Authentication instance
 * @constant
 */
export const auth = getAuth(app);
