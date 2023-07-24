import * as Yup from "yup";
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
        .required("Re-enter your password")
        .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
});

export const checkoutSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Name is required"),
    phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone is required"),
    division: Yup.string().required("Division is required"),
    district: Yup.string().required("District is required"),
    address: Yup.string().required("Address is required"),
});
