import React, { useState } from "react";
import API_URLS from "../components/api/apiUrl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../helpers/userCredentialSchema";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URLS.LOGIN}`, {
        username,
        password,
      });
      console.log("Login successful!");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <input
            id="username"
            type="text"
            {...register("username")}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <input
            id="password"
            type="password"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button onClick={handleSubmit(handleFormSubmit)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
