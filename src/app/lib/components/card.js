import Image from "next/image";
import React from "react";

const Card = ({ image, title }) => {
    return (
        <div className="shadow-xl group rounded-sm duration-300 border cursor-pointer">
            <div>
                <div className="flex justify-center min-h-[25rem]">
                    <Image
                        width="300"
                        height="500"
                        src={image}
                        alt=""
                        className="p-10 group-hover:scale-110 duration-300"
                    />
                </div>
                <div className="bg-[#F5F5F5]">
                    <div className="p-7">
                        <h2 className="lg:text-2xl text-lg font-medium hover:underline">
                            {title.slice(0,20)}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
