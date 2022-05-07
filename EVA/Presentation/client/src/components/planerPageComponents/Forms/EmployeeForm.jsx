import React, { useState } from "react";
import { Employee } from "../../../clases/EmployeeClass";

export default function EmployeeForm({
  updatePayrollList,
  Toggle,
  defaultState,
}) {
  const [employee, setEmployee] = useState(defaultState);

  const hadleChange = (e) => {
    const newValue = { [e.target.name]: e.target.value };
    setEmployee((prevState) => ({ ...prevState, ...newValue }));
  };

  const hadleUpdatePayrollList = (e) => {
    e.preventDefault();
    let newEmployee = new Employee(
      employee.position,
      employee.monthlySalary,
      employee.id
    );
    updatePayrollList(newEmployee);
    //update de default values of the form
    if (employee.id) {
      defaultState = newEmployee;
    }
    setEmployee(defaultState);
    Toggle();
  };
  return (
    <div>
      <form onSubmit={hadleUpdatePayrollList}>
        <div className="formImput">
          <label htmlFor="position">Position</label>
          <input
            value={employee.position}
            onChange={hadleChange}
            type="text"
            name="position"
            placeholder="Name of the position"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="monthlySalary">Sallary</label>
          <input
            value={employee.monthlySalary}
            onChange={hadleChange}
            type="number"
            name="monthlySalary"
            placeholder="Monthly Sallary"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <button>DONE</button>
        </div>
      </form>
    </div>
  );
}
