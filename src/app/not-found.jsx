"use client";
import Button from "@/lib/components/Button";
import Image from "next/image";
import Link from "next/link";
import error from "public/404.png";
import React from "react";

const NotFound = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-[#191919] -pt-20 px-5">
            <div>
                <Image
                    height={500}
                    width={500}
                    src={error}
                    alt=""
                    className="w-full h-auto"
                />

                <Link href={"/"} className="lg:-mt-24 flex justify-center">
                    <Button
                        textColor={"text-white"}
                        bgColor={"bg-transparent"}
                        className={
                            "lg:py-2 lg:px-4 rounded-sm border border-white"
                        }
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
