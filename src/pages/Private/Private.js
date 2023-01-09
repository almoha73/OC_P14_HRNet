import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Private = () => {
	const { currentUser } = useContext(AuthContext);
	if (!currentUser) {
		return <Navigate to="/" />;
	} else {
		return <Outlet />;
	}
};

export default Private;
