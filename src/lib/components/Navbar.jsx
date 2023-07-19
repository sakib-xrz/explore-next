"use client";
import Link from "next/link";
import { menus } from "../enums/globals";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Button from "./button";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState("/");
    return (
        <div className=" text-black bg-white border-b sticky top-0 z-50">
            <div className="container px-6 lg:py-12 mx-auto flex items-center justify-between h-20">
                <Link
                    onClick={() => setActive("/")}
                    href={"/"}
                    className="text-3xl lg:text-4xl font-black"
                >
                    Logo Here.
                </Link>
                <div className="hidden md:flex items-center gap-x-5">
                    {menus.map((menu, index) => (
                        <Link
                            onClick={() => setActive(menu.path)}
                            href={menu.path}
                            className={`${
                                active === menu.path && "underline"
                            } hover:underline underline-offset-4 duration-300 font-medium text-xl`}
                            key={index}
                        >
                            {menu.route}
                        </Link>
                    ))}
                    <Link href={"/signup"}>
                        <Button bgColor={"bg-black"} textColor={"text-white"}>
                            Sign Up
                        </Button>
                    </Link>
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
                    className={`md:hidden md:pb-0 absolute bg-white text-black top-20 px-10 transition-all duration-500 h-screen ease-in w-full ${
                        showMenu ? "left-20" : "left-[-678px]"
                    } ${showMenu && " ml-[-5rem]"}`}
                >
                    <div className="">
                        {menus.map((menu, index) => (
                            <p key={index} className="text-xl md:my-0 my-7">
                                <Link
                                    href={menu.path}
                                    onClick={() => {
                                        setShowMenu(false),
                                            setActive(menu.path);
                                    }}
                                    className={`${
                                        active === menu.path && "underline"
                                    } hover:underline underline-offset-4 font-medium duration-300`}
                                >
                                    {menu.route}
                                </Link>
                            </p>
                        ))}
                        <Link href={"/signup"}>
                            <Button
                                className={"w-full"}
                                bgColor={"bg-black"}
                                textColor={"text-white"}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
