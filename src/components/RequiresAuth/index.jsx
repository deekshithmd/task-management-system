// package imports
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// component imports
import { useData } from "../../Contexts/DataContext";

// Component to test whether user logged in or not
const RequiresAuth = ({ children }) => {
  const { token, setToken } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    // if token exists show homepage or redirect to login page
    const storedToken = sessionStorage.getItem("userToken");
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
