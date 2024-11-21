import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Link from "next/link";
import Footer from "./footer";

const Layout: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => {
    const clearOverlayer = () => {
        document.body.classList.remove("open-sidebar");
    };
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <main className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </main>
            <Footer />
            <Link
                href="/"
                className="overlayer d-lg-none d-block"
                onClick={(e) => {
                    e.preventDefault();
                    clearOverlayer();
                }}
            />
        </div>
    );
};

export default Layout;
