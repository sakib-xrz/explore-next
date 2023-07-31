import React from "react";

const Title = ({ title, border = true }) => {
    return (
        <div>
            <div
                className={`relative ${
                    border
                        ? "border-b-[1px] border-black border-opacity-20 pb-4"
                        : ""
                }`}
            >
                <h2 className="text-black font-medium text-xl lg:text-4xl capitalize">
                    {title}
                </h2>
                <div className="w-25 h-[2px] absolute bg-black bottom-[-1px] rounded-full"></div>
            </div>
        </div>
    );
};

export default Title;
