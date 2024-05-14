import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../helpers/userCredentialSchema";
import API_URLS from "../components/api/apiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      await axios.post(`${API_URLS.REGISTER}`, {
        username,
        password,
      });
      console.log("Account created!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating account:", error);
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
      <h1 className="text-2xl font-bold">Register</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div>
          <input
            name="username"
            type="text"
            {...register("username")}
            placeholder="Enter username or email"
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <input
            name="password"
            type="password"
            {...register("password")}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
