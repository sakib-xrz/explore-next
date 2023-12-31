"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Toaster position="top-center" reverseOrder={false} />
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <div className="min-h-screen">{children}</div>
                    <Footer />
                </QueryClientProvider>
            </body>
        </html>
    );
}
