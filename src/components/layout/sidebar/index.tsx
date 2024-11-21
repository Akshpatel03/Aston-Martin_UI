import images from "@/public/images";
import { ROUTES } from "@/src/shared/routes";
import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";
// import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <div className="head">
                <Link href={ROUTES.Home}>
                    <Image src={images.DealerLogo} alt="Dealer" />
                </Link>
            </div>
            <ul className="main-navigation">
                <li className="nav-link">
                    <NextLink className={`nav-item`} href={ROUTES.Home} title="Cars">
                        New Cars
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.Home} title="Cars">
                        Pre-owned Cars
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.Home} title="Repairs">
                        Servicing & Repairs
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.Home} title="Car">
                        Value My Car
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.Home} title="News">
                        News
                    </NextLink>
                </li>
                <li className="nav-link">
                    <NextLink className="nav-item" href={ROUTES.Home} title="Contact">
                        Contact
                    </NextLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;