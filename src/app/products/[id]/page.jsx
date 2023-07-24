"use client";
import Image from "next/image";
import React, { useState } from "react";
import { getSingleProduct } from "@/lib/api";
import Wrapper from "@/lib/components/Wrapper";
import Button from "@/lib/components/Button";
import Loader from "@/lib/components/Loader";
import { useQuery } from "@tanstack/react-query";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import Rating from "react-rating";
import GetCart from "@/lib/helpers/getCart";
import setCart from "@/lib/helpers/setCart";
import { toast } from "react-hot-toast";

const ProductDetails = ({ params: { id } }) => {
    const { data, isLoading } = useQuery({
        queryKey: [`product/${id}`],
        queryFn: () => getSingleProduct(id),
    });
    const { data: storedData, refetch } = GetCart();

    const isAlreadyExists = !!storedData?.find((e) => e.id == id);

    const handleAddToCart = (data) => {
        if (!isAlreadyExists) {
            setCart(data);
            toast.success("Successfully added");
        }
    };

    return (
        <Wrapper className={"my-10 space-y-14"}>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[100px]">
                    {/* left column */}
                    <div className="lg:w-4/12 p-5 lg:p-0">
                        <Image
                            width={500}
                            height={500}
                            src={data?.image}
                            alt=""
                            priority
                        />
                    </div>

                    {/* right column  */}
                    <div className="lg:w-8/12">
                        {/* PRODUCT TITLE */}
                        <div className="text-3xl font-semibold leading-tight">
                            {data?.title}
                        </div>

                        <div className="text-lg font-medium mb-5 uppercase">
                            {data?.category}{" "}
                        </div>

                        <div className="flex gap-x-2 items-center mb-5">
                            <div className="text-2xl font-semibold">
                                Rating:
                            </div>
                            <div className="flex items-start gap-x-1 mt-2">
                                <Rating
                                    readonly
                                    initialRating={data?.rating?.rate}
                                    emptySymbol={
                                        <AiOutlineStar className="text-yellow-500 text-2xl" />
                                    }
                                    fullSymbol={
                                        <AiTwotoneStar className="text-yellow-500 text-2xl" />
                                    }
                                    fractions={2}
                                />
                                <p className="text-xl font-medium">{`(${data?.rating?.count})`}</p>
                            </div>
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-2xl font-semibold">
                                Price : ${data?.price}
                            </p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5] mb-5">
                            (incl. of taxes)
                        </div>

                        <div className="mb-10">
                            <div className="text-2xl font-bold">
                                Product Details
                            </div>
                            <p className="text-lg text-justify mb-5">
                                {data?.description}
                            </p>
                            <Button
                                disabled={isAlreadyExists}
                                onClick={() => {
                                    handleAddToCart(data), refetch();
                                }}
                                bgColor={"bg-black"}
                                textColor={"text-white"}
                                className={
                                    "w-full flex justify-center border-2 border-black items-center gap-x-2 mb-5 text-xl disabled:bg-[#F5F5F5] disabled:text-black "
                                }
                            >
                                {isAlreadyExists ? (
                                    <>
                                        <>{""}</>
                                        <span>already added</span>
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            <BsFillCartCheckFill className="text-2xl" />
                                        </span>
                                        <span>Add to cart</span>
                                    </>
                                )}
                            </Button>

                            {/* WISHLIST BUTTON START */}
                            <Button
                                className={
                                    "w-full flex justify-center border-2 border-black items-center gap-x-2 text-xl"
                                }
                            >
                                <span>
                                    <AiOutlineHeart className="text-2xl" />
                                </span>
                                Add to Wishlist
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default ProductDetails;
