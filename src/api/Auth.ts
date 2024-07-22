import api from "./api";

// Login
export const apiLogin = (data: any) => api().post("/auth/login", data);

// Logout
export const apiLogout = () => api().post("/auth/logout");

// Register
export const apiRegister = (data: any) => api().post("/auth/register", data);
