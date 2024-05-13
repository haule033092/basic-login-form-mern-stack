import React from "react";
import BasicForm from "../components/form/BasicForm";

const Register = () => {
  const registerUrl =
    "https://basic-login-form-mern-stack.onrender.com/api/user/register";

  return (
    <div>
      <h1 className="text-2xl font-bold">Register</h1>
      <BasicForm url={registerUrl} />
    </div>
  );
};

export default Register;
