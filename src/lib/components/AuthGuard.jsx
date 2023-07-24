"use client";
import { usePathname, useRouter } from "next/navigation";
import GetUser from "../helpers/getUser";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: currentUser } = GetUser();

    useEffect(() => {
        const intendedDestination = localStorage.getItem("intendedDestination");
        if (!(currentUser && currentUser.email)) {
            localStorage.setItem("intendedDestination", pathname);
            router.push("/login");
        } else if (intendedDestination && currentUser && currentUser.email) {
            localStorage.removeItem("intendedDestination");
            router.push(intendedDestination);
        }
    }, [currentUser, pathname, router]);

    return children;
};

export default AuthGuard;
