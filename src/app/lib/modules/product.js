"use client";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api";
import Wrapper from "../components/Wrapper";
import Title from "../components/title";
import Card from "../components/card";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const { data: allProducts } = useQuery({
        queryKey: ["product/getAllProduct"],
        queryFn: getAllProducts,
    });

    useEffect(() => {
        setProducts(allProducts || []);
    }, [allProducts]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
        const lowerCaseValue = value.toLowerCase();
        const result = allProducts?.filter((item) =>
            item.title.toLowerCase().includes(lowerCaseValue)
        );
        setProducts(result);
    };
    return (
        <Wrapper className={"my-10 space-y-14"}>
            <div>
                <div className="md:flex items-start justify-between">
                    <Title border={false} title={"All Products"} />
                    <form className="mb-5 md:mb-0">
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <div className="p-1">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                            </span>
                            <input
                                type="search"
                                name="search"
                                className="py-4 text-xl text-black rounded-md pl-10 pr-3 focus:outline-none focus:bg-white border w-full md:w-96"
                                placeholder="Search..."
                                autoComplete="off"
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products?.map((item) => (
                        <Card
                            key={item.id}
                            rating={item.rating}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Product;
