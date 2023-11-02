// package import
import axios from "axios";

// api endpoint
const API_ENDPOINT =
  "https://task-management-system-backend-gray.vercel.app/api";

// login api call
export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (e) {
    console.log("Error", e.message);
  }
};

//signup api call
export const signup = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (e) {
    console.log("Error", e.message);
  }
};

// api call to get tasks
export const getTasks = async ({ token }) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/tasks`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (e) {
    console.log("Error in fetching tasks", e.message);
  }
};

// api call to ad task
export const addTask = async ({ task, token }) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/tasks`, task, {
      headers: { Authorization: token },
    });
    return response?.data;
  } catch (e) {
    console.log("Error in adding", e.message);
  }
};

// api call to delete a task
export const deleteTask = async ({ id, token }) => {
  try {
    const response = await axios.delete(`${API_ENDPOINT}/tasks/${id}`, {
      headers: { Authorization: token },
    });
    return response?.data;
  } catch (e) {
    console.log("Error in adding", e.message);
  }
};

// api call to update a task
export const updateTask = async ({ token, task }) => {
  try {
    const response = await axios.put(
      `${API_ENDPOINT}/tasks/${task?._id}`,
      task,
      {
        headers: { Authorization: token },
      }
    );
    return response?.data;
  } catch (e) {
    console.log("Error in adding", e.message);
  }
};
