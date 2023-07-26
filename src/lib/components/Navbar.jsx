"use client";
import Link from "next/link";
import { menus } from "../enums/globals";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./Button";
import GetCart from "../helpers/getCart";
import GetUser from "../helpers/getUser";
import { toast } from "react-hot-toast";
import Image from "next/image";
import logo from "/public/logo.png";
import user from "public/user.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);
    const { data: currentUser, refetch } = GetUser();
    const { data } = GetCart();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        toast.success("Logout successful");
        refetch();
    };

    const cartQuantity = data?.length;
    return (
        <div
            className={`${
                pathname === "/success" && "hidden"
            } text-black bg-white border-b sticky top-0 z-50`}
        >
            <div className="container px-6 lg:py-12 mx-auto flex items-center justify-between h-20">
                <Link href={"/"} className="hidden lg:block">
                    <Image src={logo} width={"200"} height={"40"} alt="" />
                </Link>
                <Link href={"/"} className="lg:hidden">
                    <Image src={logo} width={"150"} height={"80"} alt="" />
                </Link>
                <div className="hidden md:flex items-center gap-x-5">
                    {menus.map((menu, index) => (
                        <Link
                            href={menu.path}
                            className={`${
                                pathname === menu.path ? "underline" : ""
                            } hover:underline underline-offset-4 duration-300 font-medium text-xl`}
                            key={index}
                        >
                            {menu.route}
                        </Link>
                    ))}
                    <Link href={"/cart"} className="relative mr-2 text-black ">
                        {cartQuantity > 0 && (
                            <small className="absolute top-[-10px] right-[-10px] bg-black text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                                {cartQuantity}
                            </small>
                        )}
                        <AiOutlineShoppingCart className="text-2xl font-medium text-black" />
                    </Link>

                    {currentUser && currentUser.email ? (
                        <div className="relative group">
                            <Image
                                src={user}
                                height={30}
                                width={30}
                                alt=""
                                className="rounded-full cursor-pointer border-2"
                            />
                            <div className="hidden group-hover:block rounded-md absolute right-[-1rem] min-w-[130px] bg-white drop-shadow-lg">
                                <p
                                    className="px-5 py-3 border-b font-medium text-md rounded-t-md cursor-default hover:bg-[#F5F5F5]"
                                    href="#"
                                >
                                    {currentUser.name.split(" ")[0]}
                                </p>
                                <p
                                    onClick={() => handleLogout()}
                                    className="px-5 py-3 font-medium text-md rounded-b-md cursor-pointer hover:bg-red-600 hover:text-white"
                                    href="#"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    ) : (
                        <Link href={"/login"}>
                            <Button
                                bgColor={"bg-black"}
                                textColor={"text-white"}
                                className={"lg:py-2"}
                            >
                                Login
                            </Button>
                        </Link>
                    )}
                </div>
                <div className="flex items-center gap-3 md:hidden">
                    <Link href={"/cart"} className="relative text-black ">
                        {cartQuantity > 0 && (
                            <small className="absolute top-[-10px] right-[-10px] bg-black text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                                {cartQuantity}
                            </small>
                        )}
                        <AiOutlineShoppingCart className="text-3xl font-medium text-black" />
                    </Link>
                    {currentUser && currentUser.email && (
                        <div className="relative group">
                            <Image
                                src={user}
                                height={30}
                                width={30}
                                alt=""
                                className="rounded-full cursor-pointer"
                            />
                            <div className="hidden z-50 group-hover:block rounded-md absolute right-[-1rem] min-w-[130px] bg-white drop-shadow-lg">
                                <p
                                    className="px-5 py-3 border-b font-medium text-md rounded-t-md cursor-default hover:bg-[#F5F5F5]"
                                    href="#"
                                >
                                    {currentUser.name.split(" ")[0]}
                                </p>
                                <p
                                    onClick={() => handleLogout()}
                                    className="px-5 py-3 font-medium text-md rounded-b-md cursor-pointer hover:bg-red-600 hover:text-white"
                                    href="#"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    )}
                    {showMenu ? (
                        <CgClose
                            onClick={() => setShowMenu(false)}
                            className="text-3xl"
                        />
                    ) : (
                        <VscThreeBars
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
                                    onClick={() => setShowMenu(false)}
                                    href={menu.path}
                                    className={`${
                                        pathname === menu.path
                                            ? "underline"
                                            : ""
                                    } hover:underline underline-offset-4 font-medium duration-300`}
                                >
                                    {menu.route}
                                </Link>
                            </p>
                        ))}
                        {!currentUser && (
                            <Link href={"/login"}>
                                <Button
                                    onClick={() => setShowMenu(false)}
                                    className={"w-full"}
                                    bgColor={"bg-black"}
                                    textColor={"text-white"}
                                >
                                    Login
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
