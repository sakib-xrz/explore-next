const setCart = (item) => {
    const cart = localStorage.getItem("cart");

    if (cart) {
        const items = JSON.parse(cart);

        const existingItemIndex = items.findIndex(
            (cartItem) => cartItem?.id === item?.id
        );

        if (existingItemIndex !== -1) {
            items[existingItemIndex].quantity += 1;
        } else {
            item.quantity = 1;
            items.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(items));
    } else {
        item.quantity = 1;
        const items = [item];
        localStorage.setItem("cart", JSON.stringify(items));
    }
};

export default setCart;
