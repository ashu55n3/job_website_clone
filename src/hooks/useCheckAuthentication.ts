import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, getUsername } from "../lib/localStorage";
import routesConfig from "../lib/routesConfig";

const useCheckAuthentication = (protectedRoute: boolean) => {
  const [username, setUsername] = useState<string | null>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (getUsername() && getAuthToken()) {
      setUsername(getUsername());
      if (!protectedRoute)
        navigate(routesConfig.postedJobs.path, { replace: true });
    } else {
      if (protectedRoute) {
        navigate(routesConfig.login.path, { replace: false });
      }
      localStorage.clear();
    }
  }, [navigate, setUsername, protectedRoute]);

  return { username };
};

export default useCheckAuthentication;
