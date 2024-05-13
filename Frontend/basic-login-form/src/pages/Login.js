import React from "react";
import BasicForm from "../components/form/BasicForm";

const Login = () => {
  const loginUrl =
    "https://basic-login-form-mern-stack.onrender.com/api/user/login";

  return (
    <div>
      <h1 className="text-2xl font-bold">Login</h1>
      <BasicForm url={loginUrl} />
    </div>
  );
};

export default Login;
