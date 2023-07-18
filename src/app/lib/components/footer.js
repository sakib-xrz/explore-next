import React from "react";

const Footer = () => {
    return (
        <div class="container px-6 py-12 mx-auto">
            <div class="md:flex md:-mx-3 md:items-center md:justify-between">
                <h1 class="text-xl font-semibold tracking-tight text-black md:mx-3 xl:text-3xl">
                    Subscribe our newsletter to get update.
                </h1>

                <div class="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                    <a
                        href="#"
                        class="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-black rounded-sm gap-x-3"
                    >
                        <span>Sign Up Now</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <hr class="my-6 border-gray-200 md:my-10" />

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p class="font-semibold text-black text-lg">
                        Quick Link
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Who We Are
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Our Philosophy
                        </a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-black text-lg">
                        Industries
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Retail & E-Commerce
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Information Technology
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Finance & Insurance
                        </a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-black text-lg">
                        Services
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Translation
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Proofreading & Editing
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            Content Creation
                        </a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-black text-lg">
                        Contact Us
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            +880 768 473 4978
                        </a>
                        <a
                            href="#"
                            class="text-gray-600 transition-colors duration-300  hover:underline"
                        >
                            info@merakiui.com
                        </a>
                    </div>
                </div>
            </div>

            <hr class="my-6 border-gray-200 md:my-10" />

            <div class="flex flex-col items-center justify-center sm:flex-row">
                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    © Copyright 2023. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
