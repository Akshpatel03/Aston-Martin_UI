import images from "@/public/images";
import { ROUTES } from "@/shared/routes";
import Image from "next/image";
import NextLink from "next/link";
// import { useRouter } from "next/router";
import React from "react";
import { Navbar } from "react-bootstrap";

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <div className="head">
                <Navbar.Brand href="#">
                    <Image src={images.DealerLogo} alt="Dealer" />
                </Navbar.Brand>
            </div>
            <ul className="main-navigation">
                <li className="nav-link">
                    <NextLink className={`nav-item`} href={ROUTES.DesignerHome} title="Cars">
                        New Cars
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.DesignerHome} title="Cars">
                        Pre-owned Cars
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.DesignerHome} title="Repairs">
                        Servicing & Repairs
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.DesignerHome} title="Car">
                        Value My Car
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.DesignerHome} title="News">
                        News
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.DesignerHome} title="Contact">
                        Contact
                    </NextLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;