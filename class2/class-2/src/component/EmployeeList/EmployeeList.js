import "./EmployeeList.css";
import Employee from "./Employee/Employee";

const EmployeeList = () => {
	const employeeList = [
		{
			label: "Employee",
			cssClasses: "name_wrapper",
			employeeName: "Jim Halpert",
		},
		{
			label: "Employee",
			employeeName: "Andy Worhol",
			cssClasses: "name_wrapper",
		},
		{
			label: "Employee",
			employeeName: "Dwight Schrute",
			cssClasses: "name_wrapper",
		},
		{
			label: "Employee",
			employeeName: "Oscar Martinez",
			cssClasses: "name_wrapper",
		},
	];
	return (
		<div className="employee_list">
			<div className="employee_wrapper">
				<Employee
					label={employeeList[0].label}
					name={employeeList[0].employeeName}
					cssClasses={employeeList[0].cssClasses}
				></Employee>
				<div className="actions_wrapper">
					<button>Edit</button>
				</div>
			</div>
			<div className="employee_wrapper">
				<Employee
					label={employeeList[1].label}
					name={employeeList[1].employeeName}
					cssClasses={employeeList[1].cssClasses}
				/>

				<div className="actions_wrapper">
					<button>Edit</button>
				</div>
			</div>
			<div className="employee_wrapper">
				<Employee
					label={employeeList[2].label}
					name={employeeList[2].employeeName}
					cssClasses={employeeList[2].cssClasses}
				/>
				<div className="actions_wrapper">
					<button>Edit</button>
				</div>
			</div>
			<div className="employee_wrapper">
				<Employee
					label={employeeList[3].label}
					name={employeeList[3].employeeName}
					cssClasses={employeeList[3].cssClasses}
				/>
				<div className="actions_wrapper">
					<button>Edit</button>
				</div>
			</div>
		</div>
	);
};

export default EmployeeList;
