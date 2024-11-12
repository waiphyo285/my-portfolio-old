import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3, "At least 3 chars"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  message: Yup.string()
    .required("Message is required")
    .min(100, "At least 100 chars"),
});
