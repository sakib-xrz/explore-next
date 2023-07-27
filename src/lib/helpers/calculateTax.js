const calculateTax = (subtotal) => {
    console.log({subtotal});
    const taxRate = 0.004;
    const taxAmount = subtotal * taxRate;
    const roundedTaxAmount = parseFloat(taxAmount?.toFixed(2));
    return roundedTaxAmount;
};

export default calculateTax;
