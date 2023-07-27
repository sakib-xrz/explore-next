"use client";
import Button from "@/lib/components/Button";
import CartItem from "@/lib/components/CartItem";
import Wrapper from "@/lib/components/Wrapper";
import calculateTotal from "@/lib/helpers/calculateTotal";
import GetCart from "@/lib/helpers/getCart";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const Cart = () => {
    const { data, refetch } = GetCart();
    const { subtotal, shipping, tax, total } = calculateTotal(data);

    const handleClear = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            reverseButtons: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your cart has been cleared.", "success");
                localStorage.removeItem("cart");
                refetch();
            }
        });
    };

    return (
        <Wrapper className="">
            {!data || data?.length === 0 ? (
                <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-center leading-10 uppercase">
                            No item available
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="lg:flex lg:gap-x-4">
                    <div className="lg:w-8/12 w-full md:py-12 py-8 bg-white">
                        <div className="flex pb-10 justify-between items-end text-neutral">
                            <p className="text-3xl md:text-5xl font-bold leading-10">
                                Shopping Cart
                            </p>
                            <p
                                onClick={() => {
                                    handleClear(), refetch();
                                }}
                                className="text-md md:text-xl font-medium hover:text-red-600 md:mr-5 border border-neutral cursor-pointer duration-300 hover:border-red-600 px-2 py-1 rounded-md"
                            >
                                Clear Cart
                            </p>
                        </div>
                        {data?.map((item, index) => (
                            <CartItem
                                key={index}
                                item={item}
                                refetch={refetch}
                            />
                        ))}
                    </div>
                    <div className="lg:w-4/12 w-full bg-[#F3F3F3] lg:h-[calc(100vh-5rem)] sticky top-[5rem]">
                        <div className="flex flex-col p-10 justify-between lg:h-[calc(100vh-5rem)]">
                            <div className="font-semibold">
                                <p className="text-3xl md:text-4xl font-bold text-center text-neutral underline underline-offset-[12px] mb-10">
                                    Order Summary
                                </p>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-medium leading-none text-neutral">
                                            Subtotal
                                        </p>
                                        <p className="text-xl font-medium leading-none text-neutral">
                                            $
                                            {parseFloat(subtotal).toFixed(2) ??
                                                0}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-xl font-medium leading-none text-neutral">
                                            Shipping
                                        </p>
                                        <p className="text-xl font-medium leading-none text-neutral">
                                            $
                                            {parseFloat(shipping).toFixed(2) ??
                                                0}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-xl font-medium leading-none text-neutral">
                                            VAT{" "}
                                            <span className="text-gray-700 font-normal">
                                                (4%)
                                            </span>
                                        </p>
                                        <p className="text-xl font-medium leading-none text-neutral">
                                            ${parseFloat(tax).toFixed(2) ?? 0}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 md:mt-14 lg:mt-0">
                                <hr className="h-[2px] bg-neutral" />
                                <div className="flex items-center pb-6 justify-between ">
                                    <p className="text-2xl leading-normal text-neutral">
                                        Total
                                    </p>
                                    <p className="text-2xl font-bold leading-normal text-right text-neutral">
                                        ${parseFloat(total).toFixed(2) ?? 0}
                                    </p>
                                </div>

                                <Link href={"/checkout"}>
                                    <Button
                                        bgColor={"bg-black"}
                                        textColor={"text-white"}
                                        className={
                                            "w-full rounded-md md:text-xl"
                                        }
                                    >
                                        PROCEED TO CHECKOUT
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div></div>
        </Wrapper>
    );
};

export default Cart;
