import { useState } from "react";
import { deleteTask } from "../services/api.service";

export function useDelete() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleDelete = async (task, token) => {
    try {
      setLoading(true);
      const res = await deleteTask({ id: task?._id, token });
      setTasks(res?.tasks);
    } catch (e) {
      //alert("Deleting operation failed");
      setError("Deleting failed");
    } finally {
      setLoading(false);
    }
  };
  return { tasks, loading, error, handleDelete };
}
