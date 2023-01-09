import React, { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
console.log(auth);
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const signIn = (email, pwd) => {
		signInWithEmailAndPassword(auth, email, pwd);
	};
	const [currentUser, setCurrentUser] = useState();
	const [loadingData, setLoadingData] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
			setLoadingData(false);
		});
		return unsubscribe;
	}, []);

	if (loadingData) {
		return <>Loading...</>;
	}

	const value = {
		signIn,
		currentUser,
	};

	console.log(value);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
