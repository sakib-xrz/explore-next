"use client";
import loginUser from "@/lib/helpers/loginUser";
import { loginSchema } from "@/lib/schema";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import GetUser from "@/lib/helpers/getUser";

const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
    const router = useRouter();
    const [open, setOpen] = useState({
        password: false,
    });

    const { refetch } = GetUser();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            onSubmit: (values, actions) => {
                console.log(values);
                const result = loginUser(values);
                if (result === "No users found. Please sign up first.") {
                    toast.error(result);
                } else if (result === "Invalid email or password") {
                    toast.error(result);
                } else {
                    actions.resetForm();
                    toast.success(result);
                    refetch();
                    const intendedDestination = localStorage.getItem(
                        "intendedDestination"
                    );
                    router.push(intendedDestination ?? "/");
                    localStorage.removeItem("intendedDestination");
                }
            },
        });
    return (
        <section className="bg-white py-10">
            <h3 className="text-center text-4xl font-semibold uppercase">
                Log In
            </h3>
            <div className="container flex justify-center px-6 mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md"
                    autoComplete="none"
                >
                    <div className="relative mt-4">
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <span className="absolute top-1/2 mt-[2px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 mx-3 text-black/70 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </span>

                        <input
                            autoComplete="none"
                            type="email"
                            className={`block w-full py-3 text-black ${
                                errors.email && touched.email
                                    ? "border-red-600 focus:outline-red-600"
                                    : "border-black"
                            } bg-white border  rounded-md px-11`}
                            placeholder="example@gmail.com"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <small className="text-red-600 font-medium">
                            {errors.email}
                        </small>
                    ) : null}

                    <div className="relative mt-4">
                        <label className="block mb-2 text-sm font-medium">
                            Password
                        </label>
                        <span className="absolute top-1/2 mt-[2px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 mx-3 text-black/70"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </span>

                        <input
                            autoComplete="new-password"
                            type={`${open.password ? "text" : "password"}`}
                            className={`block w-full py-3 text-black ${
                                errors.password && touched.password
                                    ? "border-red-600 focus:outline-red-600"
                                    : "border-black"
                            } bg-white border  rounded-md px-11`}
                            placeholder="•••••••••••••"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {open.password ? (
                            <span
                                onClick={() =>
                                    setOpen((prevState) => ({
                                        ...prevState,
                                        password: false,
                                    }))
                                }
                                className="absolute right-0 bottom-[15px]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mx-3 text-black/70 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </span>
                        ) : (
                            <span
                                onClick={() =>
                                    setOpen((prevState) => ({
                                        ...prevState,
                                        password: true,
                                    }))
                                }
                                className="absolute right-0 bottom-[15px]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mx-3 text-black/70 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            </span>
                        )}
                    </div>
                    {errors.password && touched.password ? (
                        <small className="text-red-600 font-medium">
                            {errors.password}
                        </small>
                    ) : null}

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md"
                        >
                            Login
                        </button>

                        <div className="mt-6 text-center ">
                            <p className="text-md text-black ">
                                New here?{" "}
                                <Link
                                    href={"/signup"}
                                    className="underline font-bold underline-offset-2 cursor-pointer"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
