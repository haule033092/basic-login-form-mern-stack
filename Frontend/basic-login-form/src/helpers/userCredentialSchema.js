import * as yup from "yup";

const userCredentialSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

export default userCredentialSchema;
