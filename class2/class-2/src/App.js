import "./App.css";
import Navigation from "./component/Navigation";
import EmployeeList from "./component/EmployeeList/EmployeeList";


const App = () => {
	return (
		<div className="main_content">
			<Navigation />
			<EmployeeList />
		</div>
	);
};

export default App;