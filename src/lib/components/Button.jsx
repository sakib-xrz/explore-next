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
            className={`${bgColor ?? "bg-white"} ${
                textColor ?? "text-black"
            } uppercase py-3 px-5 lg:py-4 lg:px-8 rounded-md duration-300 disabled:cursor-not-allowed font-medium ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
