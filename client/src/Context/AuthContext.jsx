import { useState, createContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const navigate = useNavigate();
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/signin`,
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        setToken(response.data.data);
        Cookies.set("jwtToken", response.data.data, { path: "/" });
        navigate("/");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      if (token) {
        await fetchGoogleProfile(token);
      }
    },
  });

  const loginWithLinkedin = async (code) => {
    if (localStorage.getItem("code") == null) {
      try {
        console.log(code);
        localStorage.setItem("code", code);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users/signin/linkedin`,
          {
            code,
          }
        );
        if (response.data.success) {
          setToken(response.data.data);
          Cookies.set("jwtToken", response.data.data, { path: "/" });
          localStorage.removeItem("code");
          navigate("/");
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const fetchGoogleProfile = async (token) => {
    try {
      const google_response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (google_response.status === 200) {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users/signin/google`,
          {
            ...google_response.data,
            socialLogin: "Google",
          }
        );
        if (response.data.success) {
          setToken(response.data.data);
          Cookies.set("jwtToken", response.data.data, { path: "/" });
          navigate("/");
        } else {
          console.log(response.data.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const value = {
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithLinkedin,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
