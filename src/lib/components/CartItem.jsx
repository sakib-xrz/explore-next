"use client";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";

const CartItem = ({ item, refetch }) => {
    const { image, price, title, category } = item;
    const [quantity, setQuantity] = useState(item?.quantity ?? 1);

    const [totalPrice, setTotalPrice] = useState(quantity * price);

    const handleAddToCart = (item) => {
        setQuantity(quantity + 1);
        setTotalPrice((quantity + 1) * price);
        const cart = localStorage.getItem("cart");
        const cartItems = JSON.parse(cart);

        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                };
            }
            return cartItem;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        refetch();
    };

    const handleDecreaseCart = () => {
        setQuantity(quantity - 1);
        setTotalPrice((quantity - 1) * price);
        const cart = localStorage.getItem("cart");
        const cartItems = JSON.parse(cart);

        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity - 1,
                };
            }
            return cartItem;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        refetch();
    };

    const handleRemove = (item) => {
        const data = JSON.parse(localStorage.getItem("cart"));
        const deleteItem = item.id;

        const updatedData = data.filter((item) => item.id !== deleteItem);
        localStorage.setItem("cart", JSON.stringify(updatedData));
        refetch();
        toast.success("Successfully remove");
    };

    return (
        <div className="md:flex md:gap-5 items-center py-4 border-t border-gray-200">
            <div className="md:pl-3 flex justify-between">
                <Image
                    width={500}
                    height={500}
                    alt=""
                    src={image}
                    className="w-20 h-20 md:w-32 md:h-32 object-center object-cover rounded-md"
                />
                <div className="flex gap-2 md:hidden">
                    <RxCross2
                        onClick={() => {
                            handleRemove(item), refetch();
                        }}
                        className="w-6 h-6 text-red-500 cursor-pointer"
                    />
                </div>
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex justify-between w-full pt-1">
                    <div>
                        <p className="font-semibold text-xl md:text-2xl text-neutral">
                            {title}
                        </p>
                        <p className="text-neutral font-medium">
                            <span>Price:</span> ${price?.toFixed(2)}
                        </p>
                        <p className="text-neutral font-medium capitalize">
                            <span>Category:</span> {category}
                        </p>
                    </div>
                    <div className="md:flex gap-2 hidden">
                        <RxCross2
                            onClick={() => {
                                handleRemove(item), refetch();
                            }}
                            className="w-6 h-6 text-red-600 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between pt-3">
                    <div className="flex justify-center items-center w-auto border rounded-sm font-medium">
                        <button
                            className="border-none bg-none p-1 cursor-pointer outline-none font-bold disabled:opacity-20 px-3"
                            disabled={quantity < 2}
                            onClick={() => handleDecreaseCart(item)}
                        >
                            -
                        </button>
                        <div className="p-1">{quantity}</div>
                        <button
                            className="border-none bg-none p-1 cursor-pointer outline-none font-bold px-3"
                            onClick={() => handleAddToCart(item)}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-black text-neutral">Total:</p>
                        <p className="font-black text-neutral">
                            ${totalPrice?.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
