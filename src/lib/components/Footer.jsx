import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    return (
        <div
            className={`${
                pathname === "/success" && "hidden"
            } container px-6 pb-12 mx-auto`}
        >

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
