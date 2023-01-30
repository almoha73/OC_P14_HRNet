/**
 * React client side entry point for application
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth/AuthContext";


/**
 * Root component for React client-side rendering
 * @constant
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Renders App component within React Strict Mode, BrowserRouter, and AuthContextProvider
 */
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
