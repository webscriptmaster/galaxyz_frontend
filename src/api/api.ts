import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "";

const api = () => {
  // Create a new axios instance
  const instance = axios.create({
    baseURL,
    withCredentials: true,
    timeout: 20000,
    timeoutErrorMessage: "Timeout error occurred. Please try again later."
  });

  return instance;
};

export default api;
