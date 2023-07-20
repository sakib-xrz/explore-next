const calculateTotal = (data) => {
    const total = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.quantity * currentValue?.data?.price;
    }, 0);

    return total;
};

export default calculateTotal;
