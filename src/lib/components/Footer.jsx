import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="container px-6 py-12 mx-auto">
            <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                <h1 className="text-xl font-semibold tracking-tight text-black md:mx-3 xl:text-3xl">
                    Subscribe our newsletter to get update.
                </h1>

                <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center w-full py-4 px-8 font-medium text-white duration-300 bg-black rounded-md gap-x-3"
                    >
                        <span>Sign Up Now</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <hr className="my-6 border-gray-200 md:my-10" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p className="font-semibold text-black text-lg">
                        Quick Link
                    </p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Who We Are
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Our Philosophy
                        </a>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-black text-lg">
                        Industries
                    </p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Retail & E-Commerce
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Information Technology
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Finance & Insurance
                        </a>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-black text-lg">Services</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Translation
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Proofreading & Editing
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Content Creation
                        </a>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-black text-lg">
                        Contact Us
                    </p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            +880 768 473 4978
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            info@merakiui.com
                        </a>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-200 md:my-10" />

            <div className="flex flex-col items-center justify-center sm:flex-row">
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    © Copyright 2023. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
