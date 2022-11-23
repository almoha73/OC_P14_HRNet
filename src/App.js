import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create-employee" element={<CreateEmployee />}></Route>
				<Route path="/employee-list" element={<EmployeeList />}></Route>
				<Route path="*"></Route>
			</Routes>
		</div>
	);
}

export default App;
