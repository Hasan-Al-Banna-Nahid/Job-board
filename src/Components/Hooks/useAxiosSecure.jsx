import { AuthContext } from "../Authentication/AuthProvider";
import axios from "axios";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
  // const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://job-board-pied-mu.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // await logOut();
          navigate("/login");
          localStorage.removeItem("access-token");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
