"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    getElectronics,
    getJewelry,
    getMenCloth,
    getWomenCloth,
} from "@/lib/api";
import Wrapper from "@/lib/components/Wrapper";
import Title from "@/lib/components/Title";
import Loader from "@/lib/components/Loader";
import Card from "@/lib/components/Card";
import Button from "@/lib/components/Button";
import { responsive } from "@/lib/enums/globals";

export default function Home() {
    const { data: menCloths, isLoading: menClothsLoading } = useQuery({
        queryKey: ["home/menCloths"],
        queryFn: getMenCloth,
    });
    const { data: womenCloths, isLoading: womenClothsLoading } = useQuery({
        queryKey: ["home/womenCloths"],
        queryFn: getWomenCloth,
    });
    const { data: jewelry, isLoading: jewelryLoading } = useQuery({
        queryKey: ["home/jewelry"],
        queryFn: getJewelry,
    });
    const { data: electronics, isLoading: electronicsLoading } = useQuery({
        queryKey: ["home/electronics"],
        queryFn: getElectronics,
    });

    return (
        <div className="space-y-14">
            <div className="bg-image bg-right-bottom md:bg-left flex justify-center items-center text-white">
                <div className="space-y-6 lg:space-y-10">
                    <h1 className="lg:text-8xl text-4xl font-bold text-center">
                        Welcome to our <br /> Online Store
                    </h1>
                    <div className="flex justify-center">
                        <Link href={"/products"}>
                            <Button className={"lg:text-2xl"}>
                                See all products
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Wrapper className={"space-y-14"}>
                <div>
                    <div className="flex justify-between items-start">
                        <Title border={false} title={"Women's clothing"} />
                        <Link href={"/products/womans"}>
                            <button className="px-2 py-1 rounded-sm font-medium border border-black mt-1 lg:mt-3">
                                See All
                            </button>
                        </Link>
                    </div>
                    {womenClothsLoading ? (
                        <Loader />
                    ) : (
                        <div>
                            <Carousel
                                responsive={responsive}
                                containerclassName="-mx-[10px]"
                                itemclassName="px-[10px]"
                                infinite={true}
                                autoPlay={true}
                            >
                                {womenCloths?.map((cloth) => (
                                    <div key={cloth.id}>
                                        <Card
                                            id={cloth.id}
                                            item={cloth}
                                            rating={cloth?.rating}
                                            title={cloth?.title}
                                            price={cloth?.price}
                                            image={cloth?.image}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex justify-between items-start">
                        <Title border={false} title={"Men's clothing"} />
                        <Link href={"/products/mens"}>
                            <button className="px-2 py-1 rounded-sm font-medium border border-black mt-1 lg:mt-3">
                                See All
                            </button>
                        </Link>
                    </div>
                    {menClothsLoading ? (
                        <Loader />
                    ) : (
                        <div>
                            <Carousel
                                responsive={responsive}
                                containerclassName="-mx-[10px]"
                                itemclassName="px-[10px]"
                                infinite={true}
                                autoPlay={true}
                            >
                                {menCloths?.map((cloth) => (
                                    <div key={cloth.id}>
                                        <Card
                                            id={cloth.id}
                                            item={cloth}
                                            rating={cloth?.rating}
                                            title={cloth?.title}
                                            price={cloth?.price}
                                            image={cloth?.image}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex justify-between items-start">
                        <Title border={false} title={"jewelry"} />
                        <Link href={"/products/jewelry"}>
                            <button className="px-2 py-1 rounded-sm font-medium border border-black mt-1 lg:mt-3">
                                See All
                            </button>
                        </Link>
                    </div>
                    {jewelryLoading ? (
                        <Loader />
                    ) : (
                        <div>
                            <Carousel
                                responsive={responsive}
                                containerclassName="-mx-[10px]"
                                itemclassName="px-[10px]"
                                infinite={true}
                                autoPlay={true}
                            >
                                {jewelry?.map((item) => (
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
                    )}
                </div>

                <div>
                    <div className="flex justify-between items-start">
                        <Title border={false} title={"electronics"} />
                        <Link href={"/products/electronics"}>
                            <button className="px-2 py-1 rounded-sm font-medium border border-black mt-1 lg:mt-3">
                                See All
                            </button>
                        </Link>
                    </div>
                    {electronicsLoading ? (
                        <Loader />
                    ) : (
                        <div>
                            <Carousel
                                responsive={responsive}
                                containerclassName="-mx-[10px]"
                                itemclassName="px-[10px]"
                                infinite={true}
                                autoPlay={true}
                            >
                                {electronics?.map((item) => (
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
                    )}
                </div>
            </Wrapper>

            <div></div>
        </div>
    );
}
