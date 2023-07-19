import React from "react";

const Title = ({ title, border = true }) => {
    return (
        <div className="pb-10">
            <div
                className={`relative ${
                    border
                        ? "border-b-[1px] border-black border-opacity-20"
                        : ""
                } pb-4`}
            >
                <h2 className="text-black font-medium text-4xl capitalize">
                    {title}
                </h2>
                <div className="w-[100px] h-[2px] absolute bg-black bottom-[-1px] rounded-full"></div>
            </div>
        </div>
    );
};

export default Title;
