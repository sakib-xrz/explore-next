"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/lib/components/Button";
import Wrapper from "@/lib/components/Wrapper";
import { districts, divisions } from "@/lib/enums/globals";
import calculateTotal from "@/lib/helpers/calculateTotal";
import GetCart from "@/lib/helpers/getCart";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { checkoutSchema } from "@/lib/schema";
import { toast } from "react-hot-toast";
import AuthGuard from "@/lib/components/AuthGuard";

const initialValues = {
    name: "",
    phone: "",
    division: "",
    district: "",
    address: "",
};

const Checkout = () => {
    const { data } = GetCart();
    const total = calculateTotal(data);

    const formik = useFormik({
        initialValues,
        validationSchema: checkoutSchema,
        onSubmit: (values, actions) => {
            // Handle form submission here
            values.division = divisions.find(
                (dev) => dev.id === values.division
            ).name;
            values.district = districts.find(
                (dis) => dis.id === values.district
            ).name;
            toast.success("Order Placed Successfully");
            console.log(values);
            actions.resetForm();
        },
    });

    const divisionOptions = divisions.map((division) => (
        <option key={division.id} value={division.id}>
            {division.name}
        </option>
    ));

    const districtOptions = districts
        .filter((district) => district.division_id === formik.values.division)
        .map((district) => (
            <option key={district.id} value={district.id}>
                {district.name}
            </option>
        ));

    return (
        <AuthGuard>
            <div className="space-y-14 lg:space-y-20  mt-28">
                <Wrapper>
                    <p className="text-3xl md:text-5xl font-bold leading-10 text-center">
                        Checkout
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-5">
                            <div className="space-y-5 w-full">
                                <p className="font-semibold text-xl md:text-2xl mt-10">
                                    Shipping Details
                                </p>

                                <div className="space-y-5 font-semibold">
                                    <div>
                                        <label
                                            className="block ml-2 text-sm font-medium"
                                            htmlFor="LoggingEmailAddress"
                                        >
                                            Name
                                        </label>
                                        <div className="relative flex items-center mt-1">
                                            <span className="absolute">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 mx-3"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                className="block border-black w-full py-3 bg-transparent border rounded-lg px-11"
                                                placeholder="Your name"
                                                {...formik.getFieldProps(
                                                    "name"
                                                )}
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>
                                        {formik.touched.name &&
                                            formik.errors.name && (
                                                <p className="text-red-500">
                                                    {formik.errors.name}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label
                                            className="block ml-2 text-sm font-medium"
                                            htmlFor="LoggingEmailAddress"
                                        >
                                            Phone
                                        </label>
                                        <div className="relative flex items-center mt-1">
                                            <span className="absolute">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 mx-3"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                className="block w-full py-3 border-black bg-white border rounded-lg px-11"
                                                placeholder="Phone number"
                                                {...formik.getFieldProps(
                                                    "phone"
                                                )}
                                            />
                                        </div>
                                        {formik.touched.phone &&
                                            formik.errors.phone && (
                                                <p className="text-red-500">
                                                    {formik.errors.phone}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label
                                            className="block ml-2 text-sm font-medium"
                                            htmlFor="division"
                                        >
                                            Division
                                        </label>
                                        <select
                                            id="division"
                                            value={formik.values.division}
                                            onChange={formik.handleChange}
                                            className="block w-full py-3 border-black bg-white border rounded-lg px-3"
                                            {...formik.getFieldProps(
                                                "division"
                                            )}
                                        >
                                            <option value="" disabled>
                                                Choose a division
                                            </option>
                                            {divisionOptions}
                                        </select>
                                        {formik.touched.division &&
                                            formik.errors.division && (
                                                <p className="text-red-500">
                                                    {formik.errors.division}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label
                                            className="block ml-2 text-sm font-medium"
                                            htmlFor="district"
                                        >
                                            District
                                        </label>
                                        <select
                                            id="district"
                                            value={formik.values.district}
                                            onChange={formik.handleChange}
                                            className="block w-full py-3 border-black bg-white border rounded-lg px-3"
                                            {...formik.getFieldProps(
                                                "district"
                                            )}
                                        >
                                            <option value="" disabled>
                                                {formik.values.division
                                                    ? "Choose a district"
                                                    : "Please select a division first"}
                                            </option>
                                            {districtOptions.length > 0 ? (
                                                districtOptions
                                            ) : (
                                                <option value="" disabled>
                                                    No districts available for
                                                    the selected division
                                                </option>
                                            )}
                                        </select>
                                        {formik.touched.district &&
                                            formik.errors.district && (
                                                <p className="text-red-500">
                                                    {formik.errors.district}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label className="block ml-2 text-sm font-medium text-neutral">
                                            Address
                                        </label>
                                        <div className="relative flex mt-1">
                                            <span className="absolute top-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 mx-3 text-neutral/30"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                    />
                                                </svg>
                                            </span>

                                            <textarea
                                                rows="3"
                                                required={true}
                                                type="text"
                                                name="address"
                                                className="block w-full py-3 text-neutral bg-white border border-black rounded-lg px-11"
                                                placeholder="Billing address"
                                                {...formik.getFieldProps(
                                                    "address"
                                                )}
                                            />
                                        </div>
                                        {formik.touched.address &&
                                            formik.errors.address && (
                                                <p className="text-red-500">
                                                    {formik.errors.address}
                                                </p>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-8/12 bg-[#F3F3F3] mt-10">
                                <div className="flex flex-col p-10 justify-between">
                                    <div className="font-semibold">
                                        <p className="text-3xl md:text-4xl font-bold text-center underline underline-offset-[12px]">
                                            Order Summary
                                        </p>
                                    </div>

                                    <div className="mt-10 md:mt-60">
                                        <hr className="h-[2px] bg-neutral" />
                                        <div className="flex items-center pb-6 justify-between ">
                                            <p className="text-2xl leading-normal">
                                                Total
                                            </p>
                                            <p className="text-2xl font-bold leading-normal text-right">
                                                ${total ?? 0}
                                            </p>
                                        </div>
                                        <Button
                                            type="submit"
                                            bgColor="bg-black"
                                            textColor="text-white"
                                            className="w-full md:text-xl my-5"
                                            disabled={!formik.isValid}
                                        >
                                            PLACE ORDER
                                        </Button>
                                        <Link
                                            href={"/cart"}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <AiOutlineArrowLeft className="text-xl mt-1" />
                                            <p className="md:text-xl">
                                                Back to cart
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Wrapper>
            </div>
        </AuthGuard>
    );
};

export default Checkout;
