const Button = ({
    children,
    className,
    type,
    onClick,
    disabled,
    bgColor,
    textColor,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`${className} ${bgColor ?? "bg-white"} ${
                textColor ?? "text-black"
            } uppercase py-4 px-8 rounded-md duration-300 font-medium`}
        >
            {children}
        </button>
    );
};

export default Button;
