"use client";
import Link from "next/link";
import { menus } from "../enums/globals";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Button from "./button";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
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
                                active === menu.path &&
                                pathname.includes(active) &&
                                "underline"
                            } hover:underline underline-offset-4 duration-300 font-medium text-xl`}
                            key={index}
                        >
                            {menu.route}
                        </Link>
                    ))}
                    <Button bgColor={"bg-black"} textColor={"text-white"}>
                        <Link href={"/signup"}>Sign Up</Link>
                    </Button>
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
                        <Button bgColor={"bg-black"} textColor={"text-white"}>
                            <Link href={"/signup"}>Sign Up</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
