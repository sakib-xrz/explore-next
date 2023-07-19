"use client";
import { getJewelry } from "@/lib/api";
import Wrapper from "@/lib/components/Wrapper";
import Card from "@/lib/components/Card";
import Loader from "@/lib/components/Loader";
import Title from "@/lib/components/Title";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Jewelry = () => {
    const [sortedProducts, setSortedProducts] = useState(null);
    const { data: products, isLoading } = useQuery({
        queryKey: ["home/jewelry"],
        queryFn: getJewelry,
    });

    const sortByPriceLowToHigh = () => {
        if (products) {
            const sortedData = [...products].sort((a, b) => a.price - b.price);
            setSortedProducts(sortedData);
        }
    };

    const sortByPriceHighToLow = () => {
        if (products) {
            const sortedData = [...products].sort((a, b) => b.price - a.price);
            setSortedProducts(sortedData);
        }
    };

    const sortedItems = sortedProducts || products;

    return (
        <Wrapper className={"my-10"}>
            <div className="flex justify-between items-start">
                <Title border={false} title={"jewelry"} />
                <div>
                    <div className="dropdown inline-block relative">
                        <button className="bg-white text-black border border-black font-semibold py-2 px-4 rounded-sm inline-flex items-center">
                            <span className="mr-1">Sort by price</span>
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                            </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-black border pt-1 w-full z-10">
                            <li
                                className="w-full cursor-pointer"
                                onClick={sortByPriceHighToLow}
                            >
                                <p className="bg-white hover:bg-black hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    High to Low
                                </p>
                            </li>
                            <li
                                className="w-full cursor-pointer"
                                onClick={sortByPriceLowToHigh}
                            >
                                <p className="bg-white hover:bg-black hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Low to High
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {sortedItems?.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            rating={item.rating}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            )}
        </Wrapper>
    );
};

export default Jewelry;
