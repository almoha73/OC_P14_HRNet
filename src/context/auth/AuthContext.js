import React, { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Spinner from "../../components/Spinner";

console.log(auth);

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const signIn = async (email, pwd) => {
		await signInWithEmailAndPassword(auth, email, pwd);
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
		return <>Loading ...</>;
		//return <Spinner />;
	}

	const value = {
		signIn,
		currentUser,
	};

	console.log(value);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
