import axios from "axios"
const API_URL = "http://localhost:5000/api/auth";

// Register User
export const registerUser = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

// Login User
export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};