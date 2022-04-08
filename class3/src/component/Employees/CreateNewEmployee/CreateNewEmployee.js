import { useState } from "react";
import "./CreateNewEmployee.css";

const CreateNewEmployee = () => {
	// const [companyDepartment, setDepartment] = useState("");
	// const [employeeName, setName] = useState("");

	const [employeeData, setEmployeeData] = useState({
		name: "initial name",
		department: "initial dept",
	});

	// const handleNameInputChange = (event) => {
	// 	const name = event.target.value;
	// 	const copyOfState = { ...employeeData };
	// 	copyOfState.name = name;
	// 	setEmployeeData(copyOfState);
	// };
	// const handleDepartmentInputChange = (event) => {
	// 	const department = event.target.value;
	// 	setEmployeeData((previousState) => {
	// 		console.log("department value: ", department);
	// 		console.log("previous state: ", previousState);

	// 		return { ...previousState, department};
	// 	});
	// };

	// const handleSomeLogic = () => {

	// 	const a = true;
	// 	const b = false;
	// 	const c = 'true';

	// 	return a ? b ? 'hey': c ? 'no': 'ha' : 'hello';
	// }

	/**
	 * this writes the inputs to the state
	 * @param {*} event 
	 */
	const handleInputFormChange = (event) => {
		const { target: { value, name } } = event;
		setEmployeeData((prevState) => ({...prevState, [name]: value }))
	}

	const onSubmit = (event) => {
		event.preventDefault();
		// const newEmployee = {
		// 	name: employeeName,
		// 	department: companyDepartment
		// };
		console.log(employeeData);
	};
	return (
		<div className="new_employee_container">
			{/* {handleSomeLogic()} */}
			{/* {employeeData.department} */}
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="employee_name">Full name</label>
					<input
						name="employee_name"
						type="text"
						// value={employeeData.name}
						onChange={handleInputFormChange}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="employee_name">Department</label>
					<input
						name="employee_department"
						type="text"
						// value={employeeData.department}
						onChange={handleInputFormChange}
					/>
				</div>
				<div className="actions-container">
					<button className="button button-primary" type="submit">
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateNewEmployee;
