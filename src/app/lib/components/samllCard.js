import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";

const SmallCard = ({ image, title, price, rating }) => {
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
                </div>
                <div className="bg-[#F5F5F5]">
                    <div className="px-7 py-6">
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
                </div>
            </div>
        </div>
    );
};

export default SmallCard;
