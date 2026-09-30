import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="employee-list">
      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p className="no-data">No employees found.</p>
      ) : (
        <div className="cards">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;