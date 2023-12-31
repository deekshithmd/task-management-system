// package imports
import React, { useState, useContext, createContext, useEffect } from "react";

// handler function import
import { getTasks } from "../../services/api.service";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // global states
  const [taskList, setTaskList] = useState([]);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      if (token) {
        const res = await getTasks({ token });
        setTaskList(res?.tasks);
        setUserData(res);
      }
    })();
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        taskList,
        setTaskList,
        token,
        setToken,
        userData,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
