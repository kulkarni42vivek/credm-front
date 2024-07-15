import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8085",
});

export const addEmployee = (employee) =>
  api.post("/employee/addEmployee", employee);
export const addVendor = (vendor) => api.post("/vendor/addVendor", vendor);
export const sendVendorEmails = (vendorIds) =>
  api.post("/mail/sendVendorEmails", vendorIds);
export const getEmails = () => api.get("/mail/getVendorMailsList");
export const getEmployees = () => api.get("/employee/getEmpdata");
export const getVendors = () => api.get("/vendor/getVendorData");

export default api;
