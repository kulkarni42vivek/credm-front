import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Employees from "./pages/Employees";
import Vendors from "./pages/Vendors";
import SendEmails from "./pages/SendEmails";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Credmarg
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/employees">
                    Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vendors">
                    Vendors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/send-emails">
                    Sent Emails
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/send-emails" element={<SendEmails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
