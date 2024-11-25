import images from "@/public/images";
import { ROUTES } from "@/shared/routes";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Container, Navbar } from "react-bootstrap";

const Header = () => {
  const router = useRouter();

  const handleSidebar = () => {
    if (document.body.classList.contains("open-sidebar")) {
      document.body.classList.remove("open-sidebar");
    } else {
      document.body.classList.add("open-sidebar");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        document.body.classList.add("page-scrolled");
      } else {
        document.body.classList.remove("page-scrolled");
      }
    };

    // Check the scroll position on initial load
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Container fluid="xxl">
        <Navbar>
          <div className="menu-link">
            <Button
              className="btn-icon d-lg-none me-lg-0 me-2"
              variant="text"
              onClick={handleSidebar}
            >
              <Image src={images.MenuWhite} alt="Menu" height="24" width="24" />
            </Button>
            <Navbar.Brand href="#" className="d-lg-none d-flex">
              <Image src={images.DealerLogo} alt="Dealer" />
            </Navbar.Brand>
            <ul className="main-navigation d-lg-flex d-none">
              <li className="nav-link">
                {/* ${router.pathname === ROUTES.Home ? 'active' : ''}` */}
                <NextLink
                  className={`nav-item ${
                    router.pathname === ROUTES.NewCar ? "active" : ""
                  }`}
                  href={ROUTES.NewCar}
                  title="Cars"
                >
                  New Cars
                </NextLink>
              </li>
              <li className="nav-link">
                <NextLink className="nav-item" href={ROUTES.Home} title="Cars">
                  Pre-owned Cars
                </NextLink>
              </li>
              <li className="nav-link">
                <NextLink
                  className="nav-item"
                  href={ROUTES.Home}
                  title="Repairs"
                >
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
                <NextLink
                  className="nav-item"
                  href={ROUTES.Home}
                  title="Contact"
                >
                  Contact
                </NextLink>
              </li>
            </ul>
            <Button
              className="btn-icon size-sm ms-lg-0 ms-auto d-sm-flex d-none"
              variant="text"
            >
              <Image
                src={images.SearchWhite}
                alt="Search"
                height="24"
                width="24"
              />
            </Button>
          </div>
          <Navbar.Brand href="#" className="d-lg-flex d-none">
            <Image src={images.DealerLogo} alt="Dealer" />
          </Navbar.Brand>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
