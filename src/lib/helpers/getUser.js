import { useQuery } from "@tanstack/react-query";

function GetUser() {
    return useQuery({
        queryKey: ["loginUser"],
        queryFn: () => {
            const data = localStorage.getItem("loginUser");
            return data ? JSON.parse(data) : null;
        },
    });
}

export default GetUser;
