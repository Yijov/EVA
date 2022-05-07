import React, { useEffect, useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import FormsModal from "./FormsModal";
import UpdateModal from "./UpdateModal";
import EmployeeForm from "./Forms/EmployeeForm";

export default function PayrollList() {
  const { currentProjectPayroll, setCurrentProjectPayroll } = useContext(
    CurrentProjectContext
  );
  const addEmployee = (employee) => {
    let newEmployees = JSON.parse(
      localStorage.getItem("currentProjectPayroll")
    );
    newEmployees.push(employee);
    localStorage.setItem("currentProjectPayroll", JSON.stringify(newEmployees));
    setCurrentProjectPayroll(
      JSON.parse(localStorage.getItem("currentProjectPayroll"))
    );
  };

  const updateEmployee = (employee) => {
    let newEmployees = JSON.parse(
      localStorage.getItem("currentProjectPayroll")
    );
    newEmployees = newEmployees.filter((emp) => emp.id !== employee.id);
    newEmployees.push(employee);
    localStorage.setItem("currentProjectPayroll", JSON.stringify(newEmployees));
    setCurrentProjectPayroll(
      JSON.parse(localStorage.getItem("currentProjectPayroll"))
    );
  };
  const deleteEmployee = (employee) => {
    if (window.confirm("¿Are you shure you want to delete this item?")) {
      let newEmployees = JSON.parse(
        localStorage.getItem("currentProjectPayroll")
      );
      newEmployees = newEmployees.filter((emp) => emp.id !== employee.id);
      localStorage.setItem(
        "currentProjectPayroll",
        JSON.stringify(newEmployees)
      );
      setCurrentProjectPayroll(
        JSON.parse(localStorage.getItem("currentProjectPayroll"))
      );
      window.alert("Item Deleted");
    }
  };

  useEffect(() => {
    setCurrentProjectPayroll(
      JSON.parse(localStorage.getItem("currentProjectPayroll"))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={"FormList"}>
      <br />
      <FormsModal>
        <EmployeeForm
          updatePayrollList={addEmployee}
          defaultState={{
            position: "",
            monthlySalary: "",
          }}
        />
      </FormsModal>
      <br />
      <h2>Payroll</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Sallary</th>
          </tr>
        </thead>
        <tbody>
          {currentProjectPayroll.map((employee) => (
            <UpdateModal
              item={employee}
              key={employee.id}
              deleteAction={deleteEmployee}
              row={<EmployeeRow employee={employee} />}
            >
              <EmployeeForm
                updatePayrollList={updateEmployee}
                defaultState={employee}
              />
            </UpdateModal>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmployeeRow({ employee }) {
  return (
    <>
      <td>{employee.position}</td>
      <td>$ {employee.monthlySalary.toFixed(2)}</td>
    </>
  );
}
