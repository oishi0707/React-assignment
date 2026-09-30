function EmployeeCard({ employee, onDelete, onEdit }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>

      <p><strong>Employee ID:</strong> {employee.id}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Gender:</strong> {employee.gender}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Local Address:</strong> {employee.localAddress}</p>
      <p><strong>Permanent Address:</strong> {employee.permanentAddress}</p>

      <div className="card-buttons">
        <button onClick={() => onEdit(employee)}>
          Edit
        </button>

        <button onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;