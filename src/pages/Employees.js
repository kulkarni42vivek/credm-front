import React, { useState, useEffect } from "react";
import { addEmployee, getEmployees } from "../services/api";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    ctc: "",
    email: "",
  });

  useEffect(() => {
    getEmployees().then((response) => setEmployees(response.data));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.designation || !form.ctc || !form.email) {
      alert("Please fill all fields");
      return;
    }

    addEmployee(form)
      .then((response) => {
        if (response && response.data != null) {
          alert(response.data.errorMessage);
          if (response.data.errorCode === 3000) {
            getEmployees().then((response) => setEmployees(response.data));
          }
        }

        setForm({
          name: "",
          designation: "",
          ctc: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div className="container mt-3">
      <div className="card mb-4">
        <div className="card-body">
          <h1 className="card-title text-center">Manage Employees</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                id="designation"
                name="designation"
                placeholder="Designation"
                onChange={handleChange}
                value={form.designation}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ctc" className="form-label">
                CTC
              </label>
              <input
                type="text"
                className="form-control"
                id="ctc"
                name="ctc"
                placeholder="CTC"
                onChange={handleChange}
                value={form.ctc}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Employee
            </button>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Employee List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.email}>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
