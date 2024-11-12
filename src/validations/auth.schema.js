import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is a required field")
    .min(6, "Username must be at least 6 characters"),

  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});
