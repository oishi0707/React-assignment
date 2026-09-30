function EmployeeForm({ onAdd, editingEmployee, onUpdate }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const employee = {
      id: form.id.value,
      name: form.name.value,
      department: form.department.value,
      gender: form.gender.value,
      phone: form.phone.value,
      localAddress: form.localAddress.value,
      permanentAddress: form.permanentAddress.value,
    };

    if (editingEmployee) {
      onUpdate(employee);
    } else {
      onAdd(employee);
    }

    form.reset();
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h2>

      <input
        type="text"
        name="id"
        placeholder="Employee ID"
        defaultValue={editingEmployee?.id || ""}
        required
      />

      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        defaultValue={editingEmployee?.name || ""}
        required
      />

      <select
        name="department"
        defaultValue={editingEmployee?.department || ""}
        required
      >
        <option value="">Select Department</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>

      <select
        name="gender"
        defaultValue={editingEmployee?.gender || ""}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        defaultValue={editingEmployee?.phone || ""}
        required
      />

      <textarea
        name="localAddress"
        placeholder="Local Address"
        defaultValue={editingEmployee?.localAddress || ""}
        required
      />

      <textarea
        name="permanentAddress"
        placeholder="Permanent Address"
        defaultValue={editingEmployee?.permanentAddress || ""}
        required
      />

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;