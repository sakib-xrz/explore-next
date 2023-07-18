"use client";
import React from "react";
import Loader from "../components/loader";
import Card from "../components/card";
import { useQuery } from "@tanstack/react-query";
import { getMenCloth } from "../api";
import Wrapper from "../components/Wrapper";
import Title from "../components/title";

const MensPage = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ["home/menCloths"],
        queryFn: getMenCloth,
    });
    return (
        <Wrapper className={"my-10"}>
            <Title border={false} title={"Men's clothing"} />
            {isLoading ? (
                <Loader />
            ) : (
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
            )}
        </Wrapper>
    );
};

export default MensPage;
