"use client";
import React from "react";
import Button from "../components/button";
import Wrapper from "../components/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { getElectronics, getJewelry, getMenCloth, getWomenCloth } from "../api";
import Title from "../components/title";
import SmallCard from "../components/samllCard";

const Home = () => {
    const { data: menCloths } = useQuery({
        queryKey: ["home/menCloths"],
        queryFn: getMenCloth,
    });
    const { data: womenCloths } = useQuery({
        queryKey: ["home/womenCloths"],
        queryFn: getWomenCloth,
    });
    const { data: jewelry } = useQuery({
        queryKey: ["home/jewelry"],
        queryFn: getJewelry,
    });
    const { data: electronics } = useQuery({
        queryKey: ["home/electronics"],
        queryFn: getElectronics,
    });

    return (
        <div className="space-y-14">
            <div className="bg-image bg-right-bottom md:bg-left flex justify-center items-center text-white">
                <div className="space-y-6 lg:space-y-10">
                    <h1 className="lg:text-8xl text-4xl font-bold text-center">
                        Welcome to Our <br /> Online Store
                    </h1>
                    <div className="flex justify-center">
                        <Button
                            className={
                                "lg:text-2xl hover:bg-black hover:text-white"
                            }
                        >
                            See all products
                        </Button>
                    </div>
                </div>
            </div>

            <Wrapper className={"space-y-14"}>
                <div>
                    <Title border={false} title={"Men's clothing"} />
                    <div>
                        <Swiper
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {menCloths?.map((cloth) => (
                                <SwiperSlide key={cloth.id}>
                                    <SmallCard
                                        rating={cloth?.rating}
                                        title={cloth?.title}
                                        price={cloth?.price}
                                        image={cloth?.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div>
                    <Title border={false} title={"Women's clothing"} />
                    <div>
                        <Swiper
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {womenCloths?.map((cloth) => (
                                <SwiperSlide key={cloth.id}>
                                    <SmallCard
                                        rating={cloth?.rating}
                                        title={cloth?.title}
                                        price={cloth?.price}
                                        image={cloth?.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div>
                    <Title border={false} title={"jewelry"} />
                    <div>
                        <Swiper
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {jewelry?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <SmallCard
                                        rating={item?.rating}
                                        title={item?.title}
                                        price={item?.price}
                                        image={item?.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div>
                    <Title border={false} title={"electronics"} />
                    <div>
                        <Swiper
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {electronics?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <SmallCard
                                        rating={item?.rating}
                                        title={item?.title}
                                        price={item?.price}
                                        image={item?.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Wrapper>

            <div></div>
        </div>
    );
};

export default Home;
