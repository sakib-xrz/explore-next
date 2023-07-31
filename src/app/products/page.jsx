"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/lib/api";
import Wrapper from "@/lib/components/Wrapper";
import Title from "@/lib/components/Title";
import Loader from "@/lib/components/Loader";
import Card from "@/lib/components/Card";

const Product = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    const isCategoryActive = (categoryName) => {
        return category.includes(categoryName);
    };


    const { data: allProducts, isLoading } = useQuery({
        queryKey: ["product/getAllProduct"],
        queryFn: getAllProducts,
    });

    useEffect(() => {
        const filteredProducts = allProducts?.filter((item) => {
            const isInSelectedCategories =
                category.length === 0 || category.includes(item.category);
            const includesSearch = item.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            return isInSelectedCategories && includesSearch;
        });
        setProducts(filteredProducts || []);
    }, [allProducts, category, searchQuery]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
    };

    const handleCategoryToggle = (selectedCategory) => {
        setCategory((prevCategories) => {
            if (prevCategories.includes(selectedCategory)) {
                return prevCategories.filter(
                    (category) => category !== selectedCategory
                );
            } else {
                return [...prevCategories, selectedCategory];
            }
        });
    };

    return (
        <Wrapper className={"my-10 space-y-14"}>
            <div>
                <div className="md:flex items-start justify-between lg:mb-5">
                    <div className="mb-5 lg:mb-0">
                        <Title
                            border={false}
                            title={`All Products: ${products?.length ?? "0"}`}
                        />
                    </div>
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
                                className="py-2 text-xl text-black rounded-md pl-10 pr-3 focus:outline-none focus:bg-white border w-full md:w-96"
                                placeholder="Search..."
                                autoComplete="off"
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1 mb-10">
                    <ul className="flex items-center gap-2 text-sm font-medium">
                        <li
                            className="flex-1"
                            onClick={() =>
                                handleCategoryToggle("women's clothing")
                            }
                        >
                            <p
                                className={`text-gray relative flex items-center justify-center gap-2 ${
                                    isCategoryActive("women's clothing") &&
                                    "bg-white shadow"
                                } hover:bg-white rounded-lg cursor-pointer p-2 hover:text-gray-700`}
                            >
                                <span className="hidden md:block">
                                    {"Women's Clothing"}
                                </span>
                                <span className="md:hidden text-xs">
                                    {"Women"}
                                </span>
                            </p>
                        </li>
                        <li
                            className="flex-1"
                            onClick={() =>
                                handleCategoryToggle("men's clothing")
                            }
                        >
                            <p
                                className={`text-gray relative flex items-center justify-center gap-2 ${
                                    isCategoryActive("men's clothing") &&
                                    "bg-white shadow"
                                } hover:bg-white rounded-lg cursor-pointer p-2 hover:text-gray-700`}
                            >
                                <span className="hidden md:block">
                                    {"Men's Clothing"}
                                </span>
                                <span className="md:hidden text-xs">
                                    {"Men"}
                                </span>
                            </p>
                        </li>
                        <li
                            className="flex-1"
                            onClick={() => handleCategoryToggle("jewelery")}
                        >
                            <p
                                className={`text-gray relative flex items-center justify-center gap-2 ${
                                    isCategoryActive("jewelery") &&
                                    "bg-white shadow"
                                } hover:bg-white rounded-lg cursor-pointer p-2 hover:text-gray-700`}
                            >
                                <span className="hidden md:block">
                                    {"Jewelry"}
                                </span>
                                <span className="md:hidden text-xs">
                                    {"Jewelry"}
                                </span>
                            </p>
                        </li>
                        <li
                            className="flex-1"
                            onClick={() => handleCategoryToggle("electronics")}
                        >
                            <p
                                className={`text-gray relative flex items-center justify-center gap-2 ${
                                    isCategoryActive("electronics") &&
                                    "bg-white shadow"
                                } hover:bg-white rounded-lg cursor-pointer p-2 hover:text-gray-700`}
                            >
                                <span className="hidden md:block">
                                    {"Electronics"}
                                </span>
                                <span className="md:hidden text-xs">
                                    {"Electronics"}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>

                {isLoading ? (
                    <Loader />
                ) : products.length === 0 ? (
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-center leading-10 mt-20 uppercase">
                            No result found
                        </h1>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products?.map((item) => (
                            <Card
                                key={item.id}
                                item={item}
                                id={item.id}
                                rating={item.rating}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default Product;
