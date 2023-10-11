import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

async function checkIfAuthenticated() {
  try {
    const response = await axios({
      method: "get",
      url: "/api/auth/verify",
    });
    return response.status == 200;
  } catch (e) {
    if (e.response.status === 401) {
      return false;
    }
  }
  throw e;
}

export default function useIsAuthenticated() {
  const navigate = useNavigate();
  useEffect(() => {
    async function init() {
      const isAuthenticated = await checkIfAuthenticated();
      if (!isAuthenticated) {
        alert("You are not authenticated!");
        navigate("/");
      }
    }
    init();
  }, [navigate]);

  return {};
}
