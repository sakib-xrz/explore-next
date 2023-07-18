const Wrapper = ({ children, className, maxWidth }) => {
    return (
        <div
            className={`w-full ${
                maxWidth ?? "max-w-7xl"
            } px-5 md:px-10 mx-auto ${className || ""}`}
        >
            {children}
        </div>
    );
};

export default Wrapper;