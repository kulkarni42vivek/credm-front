import React, { useState, useEffect } from "react";
import { sendVendorEmails, getVendors } from "../services/api";

export default function SendEmails() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    getVendors().then((response) => setVendors(response.data));
  }, []);

  const handleChange = (e) => {
    const vendorId = e.target.value;
    setSelectedVendors((prev) =>
      e.target.checked
        ? [...prev, vendorId]
        : prev.filter((id) => id !== vendorId)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendVendorEmails(selectedVendors).then((response) =>
      setEmails(response.data)
    );
  };

  return (
    <div className="container mt-3">
      <div className="card mb-4">
        <div className="card-body">
          <h1 className="card-title">Send Emails to Vendors</h1>
          <form onSubmit={handleSubmit}>
            {vendors.map((vendor) => (
              <div className="form-check" key={vendor.vendorId}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={vendor.vendorId}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  {vendor.name} - {vendor.email}
                </label>
              </div>
            ))}
            <button type="submit" className="btn btn-primary mt-3">
              Send Emails
            </button>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Email Logs</h1>
          <ul className="list-group">
            {emails.map((email) => (
              <li key={email.id} className="list-group-item">
                {email.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
