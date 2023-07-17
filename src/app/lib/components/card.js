import Image from "next/image";
import React from "react";

const Card = () => {
    return (
        <div className="shadow-xl rounded-sm hover:scale-105 duration-300 cursor-pointer">
            <div>
                <div className="flex justify-center">
                    <Image
                        width="300"
                        height="500"
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        alt=""
                        className="p-10"
                    />
                </div>
                <div className="bg-[#F5F5F5]">
                    <div className="p-7">
                        <h2 className="text-2xl font-medium">
                            Fjallraven - Foldsack No. 1 Backpack, Fits 15
                            Laptops
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
