import React from "react";
import classes from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const SignupButoon = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={classes.signup}
        onClick={() => {
          navigate("/signup");
        }}
      >
        SignUP
      </button>
    </>
  );
};

export default SignupButoon;
