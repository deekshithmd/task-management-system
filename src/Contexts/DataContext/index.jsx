import React, { useState, useContext, createContext, useEffect } from "react";
import { getTasks } from "../../services/api.service";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getTasks({ token });
      setTaskList(res);
    })();
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
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
