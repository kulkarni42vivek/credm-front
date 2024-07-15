import React, { useState, useEffect } from "react";
import { addVendor, getVendors } from "../services/api";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", upi: "" });

  useEffect(() => {
    getVendors().then((response) => setVendors(response.data));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addVendor(form).then(() =>
      getVendors().then((response) => setVendors(response.data))
    );
    setForm({ name: "", email: "", upi: "" }); // Clear form fields after submission
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Manage Vendors</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="upi" className="form-label">
                UPI
              </label>
              <input
                type="text"
                name="upi"
                className="form-control"
                placeholder="UPI"
                value={form.upi}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Vendor
            </button>
          </form>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">Vendor List</h2>
          <ul className="list-group">
            {vendors.map((vendor) => (
              <li key={vendor.email} className="list-group-item">
                {vendor.name} - {vendor.upi}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
