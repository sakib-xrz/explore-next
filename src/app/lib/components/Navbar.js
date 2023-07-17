"use client";
import Link from "next/link";
import { menus } from "../enums/globals";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className=" text-black bg-white border-b">
            <Wrapper className="flex items-center justify-between h-20">
                <h1 className="text-3xl lg:text-4xl font-black">Logo Here.</h1>
                <div className="hidden lg:flex gap-x-5">
                    {menus.map((menu, index) => (
                        <Link
                            href={menu.path}
                            className="hover:text-yellow-400 font-medium text-xl"
                            key={index}
                        >
                            {menu.route}
                        </Link>
                    ))}
                </div>
                <div className="lg:hidden">
                    {showMenu ? (
                        <RxCross2
                            onClick={() => setShowMenu(false)}
                            className="text-4xl"
                        />
                    ) : (
                        <FaBars
                            onClick={() => setShowMenu(true)}
                            className="text-3xl"
                        />
                    )}
                </div>
                <div
                    className={`lg:hidden text-center md:pb-0 pb-12 absolute md:static bg-white text-black h-[calc(100vh - 5rem)] w-full md:z-auto left-0 md:w-auto transition-all duration-500 ease-in ${
                        showMenu ? "top-40" : "top-[-490px]"
                    } ${
                        showMenu &&
                        "h-screen flex items-center justify-center mt-[-5rem]"
                    }`}
                >
                    <div className="md:flex md:items-center space-y-7 mt-[-5rem] md:space-y-0 md:space-x-5">
                        {menus.map((menu, index) => (
                            <p key={index} className="text-xl md:my-0 my-7">
                                <Link
                                    href={menu.path}
                                    onClick={() => setShowMenu(false)}
                                    className="hover:text-yellow-400 font-medium duration-500"
                                >
                                    {menu.route}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;
