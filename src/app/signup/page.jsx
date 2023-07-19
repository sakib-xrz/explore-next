"use client";
import React, { useState } from "react";

const SignUp = () => {
    const [open, setOpen] = useState({
        password: false,
        confirmPassword: false,
    });
    return (
        <section class="bg-white py-10">
            <h3 className="text-center text-4xl font-semibold uppercase">
                Sign Up
            </h3>
            <div class="container flex justify-center px-6 mx-auto">
                <form class="w-full max-w-md" autocomplete="off">
                    <div class="relative flex items-center mt-8">
                        <span class="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-black/70"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </span>

                        <input
                            type="text"
                            class="block w-full py-3 text-black bg-white border border-black rounded-sm px-11"
                            placeholder="Username"
                        />
                    </div>
                    <small className="text-red-400 font-medium">
                        * Name is required
                    </small>

                    <div class="relative flex items-center mt-4">
                        <span class="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-black/70 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </span>

                        <input
                            autoComplete="none"
                            type="email"
                            class="block w-full py-3 text-black bg-white border border-black rounded-sm px-11 "
                            placeholder="Email address"
                        />
                    </div>

                    <div class="relative flex items-center mt-4">
                        <span class="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-black/70"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </span>

                        <input
                            autocomplete="new-password"
                            type={`${open.password ? "text" : "password"}`}
                            class="block w-full px-10 py-3 text-black bg-white border border-black rounded-sm "
                            placeholder="Password"
                        />

                        {open.password ? (
                            <span
                                onClick={() =>
                                    setOpen((prevState) => ({
                                        ...prevState,
                                        password: false,
                                    }))
                                }
                                className="absolute right-0"
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
                                className="absolute right-0"
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

                    <div class="relative flex items-center mt-4">
                        <span class="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-black/70"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </span>

                        <input
                            autocomplete="new-password"
                            type={`${open.confirmPassword ? "text" : "password"}`}
                            class="block w-full px-10 py-3 text-black bg-white border border-black rounded-sm "
                            placeholder="Confirm Password"
                        />
                        {open.confirmPassword ? (
                            <span
                                onClick={() =>
                                    setOpen((prevState) => ({
                                        ...prevState,
                                        confirmPassword: false,
                                    }))
                                }
                                className="absolute right-0"
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
                                        confirmPassword: true,
                                    }))
                                }
                                className="absolute right-0"
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

                    <label
                        for="dropzone-file"
                        class="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border border-dashed border-black rounded-sm cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-black/70"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                        </svg>

                        <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>

                    <div class="mt-6">
                        <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-sm">
                            Sign Up
                        </button>

                        <div class="mt-6 text-center ">
                            <p class="text-md text-black ">
                                Already have an account?{" "}
                                <span className="underline underline-offset-2 cursor-pointer">
                                    Log In
                                </span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
