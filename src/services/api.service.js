import axios from "axios";

const API_ENDPOINT = "http://localhost:8000/api";

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

export const getTasks = async ({ token }) => {
  console.log("token in get", token);
  try {
    const response = await axios.get(`${API_ENDPOINT}/tasks`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (e) {
    console.log("Error in fetching tasks", e.message);
  }
};

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

export const updateTask = async ({ token, task }) => {
  console.log("upd", task);
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
