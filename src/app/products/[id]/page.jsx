"use client";
import Image from "next/image";
import React from "react";
import { getProductByCategory, getSingleProduct } from "@/lib/api";
import Wrapper from "@/lib/components/Wrapper";
import Button from "@/lib/components/Button";
import Loader from "@/lib/components/Loader";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import Rating from "react-rating";
import GetCart from "@/lib/helpers/getCart";
import setCart from "@/lib/helpers/setCart";
import { toast } from "react-hot-toast";
import Card from "@/lib/components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/lib/enums/globals";
import Title from "@/lib/components/Title";

const ProductDetails = ({ params: { id } }) => {
    const { data, isLoading } = useQuery({
        queryKey: [`product/${id}`],
        queryFn: () => getSingleProduct(id),
    });

    const { data: categoryData, isLoading: categoryDataLoading } = useQuery({
        queryKey: [`category/${data?.category}`],
        queryFn: () => getProductByCategory(data?.category),
    });

    const similarProducts = categoryData?.filter((el) => el.id != id);

    const { data: storedData, refetch } = GetCart();

    const isAlreadyExists = !!storedData?.find((e) => e.id == id);

    const handleAddToCart = (data) => {
        if (!isAlreadyExists) {
            setCart(data);
            toast.success("Successfully added");
        }
    };

    return (
        <Wrapper className={"my-10 space-y-20"}>
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
                    <div className="lg:w-8/12 space-y-7">
                        {/* PRODUCT TITLE */}
                        <div>
                            <div className="text-md font-medium uppercase text-gray-500">
                                {data?.category}{" "}
                            </div>

                            <div className="text-3xl font-bold leading-tight">
                                {data?.title}
                            </div>
                        </div>

                        <div>
                            <p className="text-lg text-justify">
                                {data?.description}
                            </p>
                        </div>

                        <div className="flex gap-x-2 items-center">
                            <div className="text-2xl font-medium">Rating:</div>
                            <div className="flex items-center gap-x-1 mt-2">
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
                                <p className="text-md pb-[8px]">{`(${data?.rating?.count})`}</p>
                            </div>
                        </div>

                        {/* PRODUCT PRICE */}
                        <div>
                            <div className="flex items-center">
                                <p className="text-2xl font-medium">
                                    Price :{" "}
                                    <span className="font-bold">
                                        ${data?.price}
                                    </span>
                                </p>
                            </div>

                            <div className="text-md font-medium text-black/[0.5]">
                                (incl. of taxes)
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="lg:flex items-center gap-10">
                                <Button
                                    disabled={isAlreadyExists}
                                    onClick={() => {
                                        handleAddToCart(data), refetch();
                                    }}
                                    bgColor={"bg-black"}
                                    textColor={"text-white"}
                                    className={
                                        "w-full flex justify-center border-2 border-black items-center gap-x-2 text-xl mb-5 lg:mb-0 disabled:bg-[#F5F5F5] disabled:text-black "
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
                </div>
            )}
            {categoryDataLoading ? (
                <div></div>
            ) : (
                <div>
                    <Title border={true} title={"Similar products"} />
                    <div>
                        <Carousel
                            responsive={responsive}
                            containerClass="-mx-[10px]"
                            itemClass="px-[10px]"
                            infinite={true}
                            autoPlay={true}
                        >
                            {similarProducts?.map((item) => (
                                <div key={item.id}>
                                    <Card
                                        id={item.id}
                                        item={item}
                                        rating={item?.rating}
                                        title={item?.title}
                                        price={item?.price}
                                        image={item?.image}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default ProductDetails;
