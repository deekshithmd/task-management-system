import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";

// Testing whether user authenticated or not
const RequiresAuth = ({ children }) => {
  const { token, setToken } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    if (token || storedToken) {
      setToken(storedToken);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [token]);

  return children;
};

export default RequiresAuth;
