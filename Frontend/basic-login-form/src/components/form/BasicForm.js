import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const onSubmit = (data) => {
    console.log(data);
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
