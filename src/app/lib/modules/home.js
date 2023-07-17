"use client";
import React from "react";
import Button from "../components/button";
import Card from "../components/card";
import Wrapper from "../components/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {FiArrowLeftCircle} from "react-icons/fi"
import {FiArrowRightCircle} from "react-icons/fi"

const Home = () => {
    return (
        <div className="space-y-10">
            <div className="bg-image bg-right-bottom lg:bg-left flex justify-center items-center text-white">
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
            <Wrapper>
                <div>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
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
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Wrapper>

            <div></div>
        </div>
    );
};

export default Home;
