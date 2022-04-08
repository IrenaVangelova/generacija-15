import "./App.css";
import Navigation from "./component/Navigation";
import EmployeeList from "./component/Employees/EmployeeList/EmployeeList";
import CreateNewEmployee from "./component/Employees/CreateNewEmployee/CreateNewEmployee";

const App = (props) => {
	return (
		<div className="app-container">
			<div className="navigation">
				<Navigation />
			</div>
			<div className="main_content">
				<CreateNewEmployee />
				<EmployeeList />
			</div>
		</div>
	);
};

export default App;
