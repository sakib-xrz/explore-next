"use client";
import Image from "next/image";
import React from "react";
import Button from "./button";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";
import Link from "next/link";
import setCart from "../helpers/setCart";
import GetCart from "../helpers/getCart";
import { toast } from "react-hot-toast";

const Card = ({id, image, title, price, rating , item}) => {

    const handleAddToCart = (data) => {
        setCart(data);
        toast.success("Successfully added");
    };

    const { refetch } = GetCart();

    return (
        <div className="shadow-xl group rounded-sm duration-300 border cursor-pointer">
            <div>
                <Link href={`/products/${id}`}>
                    <div className="flex justify-center h-[25rem]">
                        <Image
                            width="300"
                            height="500"
                            src={image}
                            alt=""
                            priority
                            className="p-10 group-hover:scale-110 duration-300 object-cover"
                        />
                    </div>
                    <div>
                        <div className="px-7 py-3">
                            <h2 className="lg:text-xl text-lg text-center font-medium hover:underline">
                                {title?.slice(0, 20)}...
                            </h2>
                            <div className="flex justify-center items-start gap-x-1 mt-2">
                                <Rating
                                    readonly
                                    initialRating={rating?.rate}
                                    emptySymbol={
                                        <AiOutlineStar className="text-yellow-500 text-2xl" />
                                    }
                                    fullSymbol={
                                        <AiTwotoneStar className="text-yellow-500 text-2xl" />
                                    }
                                    fractions={2}
                                />
                                <p className="text-xl font-medium">{`(${rating?.count})`}</p>
                            </div>
                            <h3 className="text-center text-3xl font-medium mt-2">
                                $ {price}
                            </h3>
                        </div>
                    </div>
                </Link>
                <Button
                    onClick={() => {
                        handleAddToCart(item), refetch();
                    }}
                    bgColor={"bg-black"}
                    textColor={"text-white"}
                    className={
                        "w-full flex justify-center items-center gap-x-2 rounded-t-none"
                    }
                >
                    <span>
                        <BsFillCartCheckFill className="text-2xl" />
                    </span>
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default Card;
