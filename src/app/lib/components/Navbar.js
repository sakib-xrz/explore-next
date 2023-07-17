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
                <div className="hidden md:flex gap-x-5">
                    {menus.map((menu, index) => (
                        <Link
                            href={menu.path}
                            className="hover:underline duration-300 font-medium text-xl"
                            key={index}
                        >
                            {menu.route}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
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
                    className={`md:hidden text-center md:pb-0 pb-40 absolute bg-white text-black h-[calc(100vh - 5rem)] w-full left-0 transition-all duration-500 ease-in ${
                        showMenu ? "top-40" : "top-[-490px]"
                    } ${
                        showMenu &&
                        "h-screen flex items-center justify-center mt-[-5rem]"
                    }`}
                >
                    <div className="">
                        {menus.map((menu, index) => (
                            <p key={index} className="text-xl md:my-0 my-7">
                                <Link
                                    href={menu.path}
                                    onClick={() => setShowMenu(false)}
                                    className="hover:underline font-medium duration-300"
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
