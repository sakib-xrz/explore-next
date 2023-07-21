const calculateTotal = (data) => {
    const total = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.quantity * currentValue?.price;
    }, 0);

    return total;
};

export default calculateTotal;
