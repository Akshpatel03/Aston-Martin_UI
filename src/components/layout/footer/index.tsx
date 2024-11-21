import images from "@/public/images";
import { ROUTES } from "@/src/shared/routes";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";
import { Button, Collapse, Container, Dropdown, Navbar } from "react-bootstrap";

const Footer = () => {
  const [openInnerCollapse, setOpenInnerCollapse] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("United Kingdom");

  const handleCountrySelect: (eventKey: string | null, e?: React.SyntheticEvent<unknown>) => void = (eventKey) => {
    if (eventKey) {
      setSelectedCountry(eventKey);
    }
  };

  // const router = useRouter();

  return (
    <footer>
      <Container fluid>
        <div className="top-footer">
          <Navbar.Brand href={ROUTES.Home}>
            <Image src={images.DealerLogoGrey} alt="Dealer" />
          </Navbar.Brand>
        </div>
        <div className="bottom-footer">
          <ul className="footer-nav d-sm-flex d-none">
            <li>
              <Link className="footer-link" href={"#"} title="Approved Used">Approved Used</Link>
            </li>
            <li>
              <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
            </li>
            <li>
              <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
            </li>
            <li>
              <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
            </li>
            <li>
              <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
            </li>
          </ul>

          <div className="collapse-wrapper d-sm-none">
            <Button
              className="d-flex justify-content-between align-items-center"
              variant="text"
              onClick={() => setOpenInnerCollapse(!openInnerCollapse)}
            >
              <span className="font14">NAVIGATION</span>
              <Image src={images.PlusGrey} height={16} width={16} alt="Plus" />
            </Button>
            <Collapse in={openInnerCollapse}>
              <div>
                <ul className="footer-nav">
                  <li>
                    <Link className="footer-link" href={"#"} title="Approved Used">Approved Used</Link>
                  </li>
                  <li>
                    <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
                  </li>
                  <li>
                    <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
                  </li>
                  <li>
                    <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
                  </li>
                  <li>
                    <Link className="footer-link" href={"#"} title="Navigation item">Navigation item</Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>


          <div className="second-footer">
            <Dropdown
              className="country-dropdown"
              onSelect={handleCountrySelect}
            >
              <Dropdown.Toggle className="btn-text" variant="text">
                <span className="font-regular font14">{selectedCountry}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="United Kingdom" as="button">
                  United Kingdom
                </Dropdown.Item>
                <Dropdown.Item eventKey="United States of America" as="button">
                  United States of America
                </Dropdown.Item>
                <Dropdown.Item eventKey="India" as="button">
                  India
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="social-block">
              <div className="social-links">
                <Link className="footer-img-link" href={"#"} title="Instagram">
                  <Image src={images.InstagramWhite} alt="Instagram" />
                </Link>
                <Link className="footer-img-link" href={"#"} title="Facebook">
                  <Image src={images.FacebookWhite} alt="Facebook" />
                </Link>
                <Link className="footer-img-link" href={"#"} title="Twitter">
                  <Image src={images.TwitterWhite} alt="Twitter" />
                </Link>
                <Link className="footer-img-link" href={"#"} title="Youtube">
                  <Image src={images.YoutubeWhite} alt="Youtube" />
                </Link>
              </div>
              <ul className="footer-nav">
                <li>
                  <Link className="footer-link" href={"#"} title="Terms & Conditions">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link className="footer-link" href={"#"} title="Privacy">Privacy</Link>
                </li>
                <li>
                  <Link className="footer-link" href={"#"} title="Cookies">Cookies</Link>
                </li>
                <li>
                  <p className="copyright ms-1">© Dealer X 2024</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
