import classes from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
// import axios from "axios";

const logOutURL = process.env.REACT_APP_BASE_API_URL + "api/logoutall/";

const LogOutButton = () => {
  const navigate = useNavigate();
  const [loggedIn, setLogggedIn] = useState(false);

  const logOut = () => {
    axiosInstance.post(`${logOutURL}`).then((response) => {
      if (!localStorage.getItem("token")) {

        toast("User haven't logged in yet!");
      }
      toast("Logged Out Successfully!");
      localStorage.clear();
      navigate("/");
    });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogggedIn(true);
    }
  }, [loggedIn]);

  return (
    <>
      {loggedIn && (
        <button
          className={classes.delete}
          onClick={() => {
            logOut();
          }}
        >
          LogOut
        </button>
      )}
    </>
  );
};

export default LogOutButton;
