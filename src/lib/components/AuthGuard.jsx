"use client";
import { usePathname, useRouter } from "next/navigation";
import GetUser from "../helpers/getUser";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: currentUser } = GetUser();
    useEffect(() => {
        if (!(currentUser && currentUser.email)) {
            localStorage.setItem("intendedDestination", pathname);
            router.push("/login");
        }
    }, [currentUser, pathname, router]);

    return children;
};

export default AuthGuard;
