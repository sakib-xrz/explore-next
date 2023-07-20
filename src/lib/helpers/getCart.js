import { useQuery } from "@tanstack/react-query";

function GetCart() {
    return useQuery({
        queryKey: ["cart"],
        queryFn: () => {
            const data = localStorage.getItem("cart");
            return data ? JSON.parse(data) : null;
        },
    });
}

export default GetCart;
