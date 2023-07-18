import Image from "next/image";
import React from "react";
import Button from "./button";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Rating from "react-rating";
import { useState } from "react";

const Card = ({ image, title, price, rating }) => {
    const [wishlist, setWishlist] = useState(false);
    return (
        <div className="shadow-xl group rounded-md duration-300 border cursor-pointer">
            <div>
                <div className="flex justify-center h-[25rem] relative">
                    <Image
                        width="300"
                        height="500"
                        src={image}
                        alt=""
                        className="p-10 group-hover:scale-110 duration-300 object-cover"
                    />
                    <p className="absolute right-6 top-6 rounded-l-md">
                        {wishlist ? (
                            <AiFillHeart
                                onClick={() => setWishlist(false)}
                                className="text-4xl text-red-600"
                            />
                        ) : (
                            <AiOutlineHeart
                                onClick={() => setWishlist(true)}
                                className="text-4xl"
                            />
                        )}
                    </p>
                </div>
                <div>
                    <div className="px-7 py-3">
                        <h2 className="lg:text-2xl text-lg text-center font-medium hover:underline">
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
                    <Button
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
        </div>
    );
};

export default Card;
