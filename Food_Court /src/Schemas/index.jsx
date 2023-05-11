import * as yup from "yup";

export const signInSchema = yup.object().shape({
  number: yup.number().positive().integer().required("Required"),
});
