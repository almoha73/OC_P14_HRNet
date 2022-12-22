import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth/AuthContext";
import { EmployeeContextProvider } from "./context/getEmployee/employeeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AuthContextProvider>
			<EmployeeContextProvider>
				<App />
			</EmployeeContextProvider>
		</AuthContextProvider>
	</BrowserRouter>
);
