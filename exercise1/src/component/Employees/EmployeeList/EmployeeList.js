import './EmployeeList.css';
import Employee from '../Employee/Employee';
import React, { useState } from 'react';
import Card from '../../Card/Card';
import Login from '../../NavbarActions/Login/Login';

const EmployeeList = ({ employeeList }) => {
  const [state, setState] = useState('➕');

  const onButtonClick = () => {
    setState((prevState) => (prevState === '➕' ? '➖' : '➕'));
  };

  let employeeListContent = <p>No employees entered present.</p>;

  if (employeeList.length > 0) {
    employeeListContent = employeeList.map((employee) => (
      <Card key={employee['_id']} cssClasses='employee_wrapper'>
        <Employee employeeData={employee}></Employee>
        <div className='actions_wrapper'>
          <button onClick={onButtonClick}>{state}</button>
        </div>
        <Login username={employee.name} />
      </Card>
    ));
  }

  return (
    <div className='employee_list'>
      <h2>Employees</h2>
      {employeeListContent}
    </div>
  );
};

export default EmployeeList;
