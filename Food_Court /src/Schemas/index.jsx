import * as yup from "yup";

export const signInSchema = yup.object().shape({
  number: yup.number().positive().integer().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  username: yup
    .string()
    .min(2, "Username must be at least 2 characters long")
    .required("Required"),
});
