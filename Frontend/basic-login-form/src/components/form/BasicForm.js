import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fetchApi } from "../../helpers/fetchApi";

const schema = yup.object({
  username: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetchApi("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          placeholder="Enter username or email"
        />
        <p>{errors.username?.message}</p>

        <input {...register("password")} placeholder="Enter your password" />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default BasicForm;
