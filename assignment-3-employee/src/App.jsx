import { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      employeeId: "EMP001",
      department: "IT",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Kolkata",
      permanentAddress: "Siliguri",
    },
    {
      id: 2,
      name: "Priya Das",
      employeeId: "EMP002",
      department: "HR",
      gender: "Female",
      phone: "9876543211",
      localAddress: "Kolkata",
      permanentAddress: "Durgapur",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    department: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update employee
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.employeeId ||
      !form.department ||
      !form.gender ||
      !form.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingId !== null) {
      setEmployees(
        employees.map((employee) =>
          employee.id === editingId
            ? { ...employee, ...form }
            : employee
        )
      );

      setEditingId(null);
    } else {
      const newEmployee = {
        id: Date.now(),
        ...form,
      };

      setEmployees([...employees, newEmployee]);
    }

    setForm({
      name: "",
      employeeId: "",
      department: "",
      gender: "",
      phone: "",
      localAddress: "",
      permanentAddress: "",
    });
  };

  // Delete employee
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    }
  };

  // Edit employee
  const handleEdit = (employee) => {
    setForm({
      name: employee.name,
      employeeId: employee.employeeId,
      department: employee.department,
      gender: employee.gender,
      phone: employee.phone,
      localAddress: employee.localAddress,
      permanentAddress: employee.permanentAddress,
    });

    setEditingId(employee.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Search and department filter
  const filteredEmployees = employees.filter((employee) => {
    const searchText =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.employeeId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.phone.includes(search);

    const departmentMatch =
      departmentFilter === "All" ||
      employee.department === departmentFilter;

    return searchText && departmentMatch;
  });

  return (
    <div className="app">
      <header>
        <h1>Employee Directory</h1>
        <p>Employee Management System using React State & Events</p>
      </header>

      <div className="container">

        {/* Employee Form */}
        <section className="card">
          <h2>
            {editingId !== null
              ? "Edit Employee"
              : "Add Employee"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              <div>
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter employee name"
                />
              </div>

              <div>
                <label>Employee ID *</label>
                <input
                  type="text"
                  name="employeeId"
                  value={form.employeeId}
                  onChange={handleChange}
                  placeholder="EMP001"
                />
              </div>

              <div>
                <label>Department *</label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>

              <div>
                <label>Gender *</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label>Local Address</label>
                <input
                  type="text"
                  name="localAddress"
                  value={form.localAddress}
                  onChange={handleChange}
                  placeholder="Local address"
                />
              </div>

              <div>
                <label>Permanent Address</label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={form.permanentAddress}
                  onChange={handleChange}
                  placeholder="Permanent address"
                />
              </div>

            </div>

            <div className="buttons">
              <button type="submit" className="add-btn">
                {editingId !== null
                  ? "Update Employee"
                  : "Add Employee"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setEditingId(null);
                    setForm({
                      name: "",
                      employeeId: "",
                      department: "",
                      gender: "",
                      phone: "",
                      localAddress: "",
                      permanentAddress: "",
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Search and Filter */}
        <section className="controls">

          <input
            type="text"
            placeholder="Search by name, ID or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={departmentFilter}
            onChange={(e) =>
              setDepartmentFilter(e.target.value)
            }
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>

        </section>

        {/* Employee Count */}
        <div className="count">
          Total Employees: <strong>{employees.length}</strong>
        </div>

        {/* Employee List */}
        <section className="employee-list">

          {filteredEmployees.length === 0 ? (
            <p className="no-data">
              No employees found.
            </p>
          ) : (
            filteredEmployees.map((employee) => (
              <div className="employee-card" key={employee.id}>

                <div className="employee-info">
                  <h3>{employee.name}</h3>

                  <p>
                    <strong>ID:</strong>{" "}
                    {employee.employeeId}
                  </p>

                  <p>
                    <strong>Department:</strong>{" "}
                    {employee.department}
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    {employee.phone}
                  </p>
                </div>

                <div className="employee-buttons">

                  <button
                    className="view-btn"
                    onClick={() =>
                      setSelectedEmployee(employee)
                    }
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(employee)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(employee.id)
                    }
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))
          )}

        </section>

      </div>

      {/* Employee Details */}
      {selectedEmployee && (
        <div className="modal">

          <div className="modal-content">

            <button
              className="close-btn"
              onClick={() =>
                setSelectedEmployee(null)
              }
            >
              ×
            </button>

            <h2>Employee Details</h2>

            <p>
              <strong>Name:</strong>{" "}
              {selectedEmployee.name}
            </p>

            <p>
              <strong>Employee ID:</strong>{" "}
              {selectedEmployee.employeeId}
            </p>

            <p>
              <strong>Department:</strong>{" "}
              {selectedEmployee.department}
            </p>

            <p>
              <strong>Gender:</strong>{" "}
              {selectedEmployee.gender}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {selectedEmployee.phone}
            </p>

            <p>
              <strong>Local Address:</strong>{" "}
              {selectedEmployee.localAddress}
            </p>

            <p>
              <strong>Permanent Address:</strong>{" "}
              {selectedEmployee.permanentAddress}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;