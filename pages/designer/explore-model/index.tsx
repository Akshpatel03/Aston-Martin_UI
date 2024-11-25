import React, { useEffect, useState } from "react";
import AvailableLocation from "@/components/AvailableLocation";
import images from "@/public/images";
import Image from "next/image";
import { Button, Collapse, Container } from "react-bootstrap";
import EngineImg from "@/public/images/explore-model/engine-img.jpg";
import CarHandlingImg from "@/public/images/explore-model/car-handling-img.jpg";
import BreakImg from "@/public/images/explore-model/break-img.jpg";
import CarInteriorControl from "@/public/images/explore-model/car-interior-control-img.jpg";
import CarInteriorFinishing from "@/public/images/explore-model/car-interior-finishing-img.jpg";
import CarInteriorSeat from "@/public/images/explore-model/car-interior-seat-img.svg";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlotCounter from "react-slot-counter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";

// Odometer styles
import "odometer/themes/odometer-theme-car.css";

const DesignerExploreModel = () => {
  // collapse
  const [openENGINE, setENGINEOpen] = useState(true);
  const [openCarHandling, setCarHandlingOpen] = useState(true);
  const [openCarBreak, setCarBreakOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // setwindowWidth
      if (window.innerWidth <= 991) {
        setENGINEOpen(false);
        setCarHandlingOpen(false);
        setCarBreakOpen(false);
      } else {
        setENGINEOpen(true);
        setCarHandlingOpen(true);
        setCarBreakOpen(true);
      }
    };

    handleResize();

    // Add the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Banner Start */}
      <div className="hero-banner">
        {/* <video controls width="600">
          <source src="/videos/DBX707.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <p className="label">Power. driven.</p>
        <h1 className="title">Aston Martin DBX707</h1>
        <p className="description mb-0">
          The world&apos;s most powerful luxury SUV
        </p>
        <div className="action" data-swiper-parallax="-500">
          <Button className="size-lg" variant="light">
            Enquire
          </Button>
          <Button className="size-lg" variant="mid-transparent">
            Configure
          </Button>
        </div>
      </div>
      {/* Hero Banner End */}

      {/* Info Section Start */}
      <div className="info-section block-spacing-y-80">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3 className="title am">An SUV like no other</h3>
                <p className="description">
                  The DBX 707 is a genuine supercar. An SUV that drives like a
                  sports car and exudes muscular beauty. Combining unmatched
                  engineering mastery with an opulent and refined design, the
                  DBX 707 owes its name to an engine which produces 707PS which
                  allows it to unleash new levels of dynamic performance. The
                  DBX 707 is truly one of a kind; a luxury SUV which looks,
                  moves, feels and sounds like no other before it.
                </p>
              </div>
            </div>
            <div className="col-lg-6 right-img-block">
              <Image
                className="right-side-image"
                src={images.CarImg}
                alt="car"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Info Section End */}

      {/* count Section Start */}
      <div className="count-section-wrapper">
        <div className="container-xxl">
          <ul className="count-lisitng">
            <li className="count-item">
              <p className="title">
                POWER <span>PS</span>
              </p>
              <div className="count">
                <SlotCounter value={707} />
              </div>
            </li>
            <li className="count-item">
              <p className="title">
                TOP SPEED <span>MPH</span>
              </p>
              <div className="count">
                <SlotCounter value={193} />
              </div>
            </li>
            <li className="count-item">
              <p className="title">
                0-62 MPH <span>S</span>
              </p>
              <div className="count">
                <SlotCounter value={3.3} />
              </div>
            </li>
            <li className="count-item">
              <p className="title">
                TORQUE <span>NM</span>
              </p>
              <div className="count">
                <SlotCounter value={900} />
              </div>
            </li>
          </ul>

          <Button className="size-lg" variant="mid-transparent">
            See full specifications
            <em className="ic right">
              <Image src={images.ArrowNarrowRightSMWhite} alt="Next" />
            </em>
          </Button>
        </div>
      </div>
      {/* count Section End */}

      {/* info-thumb Section Start */}
      <div className="info-thumb-section">
        <div className="container-xxl">
          <h1 className="title am mb-56p">Engineering and performance</h1>
          <div className="row">
            <div className="col-lg-6">
              <div className="info-thumb-card h-100">
                <div className="info">
                  <label className="am head subtitle1">
                    ENGINE
                    <button
                      className="btn acc-btn"
                      onClick={() => setENGINEOpen(!openENGINE)}
                      aria-expanded={openENGINE}
                    >
                      <Image src={images.ChevronDownDark} alt="Previous" />
                    </button>
                  </label>
                  <h2 className="title am">Unparalleled power</h2>
                  <Collapse in={openENGINE}>
                    <div>
                      <p className="des">
                        The DBX707 is fitted with the most powerful engine of
                        any production luxury SUV in the world and boasts a
                        staggering 707PS power output and 900Nm of torque. The
                        new beating heart of the DBX gives you explosive sports
                        car performance and a new 9-speed wet clutch automatic
                        transmission for faster gear changes and unrivalled
                        control.
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div
                  className="img-thumb"
                  style={{ backgroundImage: `url(${EngineImg.src})` }}
                ></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        HANDLING
                        <button
                          className="btn acc-btn"
                          onClick={() => setCarHandlingOpen(!openCarHandling)}
                          aria-expanded={openCarHandling}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </button>
                      </label>
                      <h3 className="title am">Dynamism re-defined</h3>
                      <Collapse in={openCarHandling}>
                        <div>
                          <p className="des">
                            A full suite of handling modifications brings a new
                            sense of dynamism to the DBX. Re-rated dampers and a
                            brand-new centre console, which adds functions like
                            ESP and suspension control, shorten the drive and
                            allow you to exploit the car’s colossal power.
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{ backgroundImage: `url(${CarHandlingImg.src})` }}
                    ></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        BRAKES
                        <button
                          className="btn acc-btn"
                          onClick={() => setCarBreakOpen(!openCarBreak)}
                          aria-expanded={openCarBreak}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </button>
                      </label>
                      <h3 className="title am">Record braking</h3>
                      <Collapse in={openCarBreak}>
                        <div>
                          <p className="des">
                            Relentless power demands an indomitable braking
                            system. The DBX707 engine is kept in check with the
                            largest brakes ever fitted in any Aston Martin.
                            These carbon ceramic brakes can cut unsprung mass by
                            33kg, shorten the stopping distance and give you
                            control like never before.
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{ backgroundImage: `url(${BreakImg.src})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* info-thumb Section End */}

      {/* Hero Banner Start */}
      <Swiper
        modules={[Navigation, Pagination, Parallax]}
        speed={1200}
        parallax
        loop
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        navigation
        className="hero-banner-slider default-slider h-1080"
      >
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">
            EXTERIOR
          </p>
          <h1 className="title" data-swiper-parallax="-400">
            Hero banner title
          </h1>
          <p className="description mb-4" data-swiper-parallax="-500">
            The DBX707, the performance SUV, exudes its own style and muscular
            beauty.{" "}
          </p>
          <p className="description m-0" data-swiper-parallax="-500">
            With dark satin chrome window surrounds and newly designed louvred
            bonnet blades, the heavily sculpted front grille leads to a stylish
            carbon fibre rear spoiler to complete an iconic and aerodynamic SUV
            silhouette.
          </p>
          <Image
            className="banner-img"
            src={images.CarExteriorImg}
            alt="CarExteriorImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">
            EXTERIOR
          </p>
          <h1 className="title" data-swiper-parallax="-400">
            Hero banner title
          </h1>
          <p className="description mb-4" data-swiper-parallax="-500">
            The DBX707, the performance SUV, exudes its own style and muscular
            beauty.{" "}
          </p>
          <p className="description m-0" data-swiper-parallax="-500">
            With dark satin chrome window surrounds and newly designed louvred
            bonnet blades, the heavily sculpted front grille leads to a stylish
            carbon fibre rear spoiler to complete an iconic and aerodynamic SUV
            silhouette.
          </p>
          <Image
            className="banner-img"
            src={images.CarExteriorImg}
            alt="CarExteriorImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">
            EXTERIOR
          </p>
          <h1 className="title" data-swiper-parallax="-400">
            Hero banner title
          </h1>
          <p className="description mb-4" data-swiper-parallax="-500">
            The DBX707, the performance SUV, exudes its own style and muscular
            beauty.{" "}
          </p>
          <p className="description m-0" data-swiper-parallax="-500">
            With dark satin chrome window surrounds and newly designed louvred
            bonnet blades, the heavily sculpted front grille leads to a stylish
            carbon fibre rear spoiler to complete an iconic and aerodynamic SUV
            silhouette.
          </p>
          <Image
            className="banner-img"
            src={images.CarExteriorImg}
            alt="CarExteriorImg"
          />
        </SwiperSlide>
      </Swiper>
      {/* Hero Banner End */}

      {/* info-thumb Section Start */}
      <div className="info-thumb-section">
        <div className="container-xxl">
          <h1 className="title am mb-56p">Interior</h1>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        CENTRE CONSOLE
                        <button
                          className="btn acc-btn"
                          onClick={() => setCarHandlingOpen(!openCarHandling)}
                          aria-expanded={openCarHandling}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </button>
                      </label>
                      <h3 className="title am">
                        Instant access, ultimate control
                      </h3>
                      <Collapse in={openCarHandling}>
                        <div>
                          <p className="des">
                            An all-new centre console puts the driver in full
                            control. With instant commands at your fingertips,
                            altering the car’s dynamics is now effortless.
                            Choose from several driving modes, ESP, and
                            suspension control and embrace the full force of a
                            supercar.
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{
                        backgroundImage: `url(${CarInteriorControl.src})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        INTERIOR JEWELLERY
                        <button
                          className="btn acc-btn"
                          onClick={() => setCarBreakOpen(!openCarBreak)}
                          aria-expanded={openCarBreak}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </button>
                      </label>
                      <h3 className="title am">
                        Opulence and refined finishes
                      </h3>
                      <Collapse in={openCarBreak}>
                        <div>
                          <p className="des">
                            From styling dark chrome to bright chrome or carbon
                            fibre, take your pick of interior switchgear
                            finishes. The veneer also comes with various
                            luxurious finishes with elegant Piano Black set as
                            standard and carbon fibre or bronze metal mesh as
                            other available options.
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{
                        backgroundImage: `url(${CarInteriorFinishing.src})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info-thumb-card h-100">
                <div className="info">
                  <label className="am head subtitle1">
                    Cabin
                    <button
                      className="btn acc-btn"
                      onClick={() => setENGINEOpen(!openENGINE)}
                      aria-expanded={openENGINE}
                    >
                      <Image src={images.ChevronDownDark} alt="Previous" />
                    </button>
                  </label>
                  <h2 className="title am">A marriage of sport and luxury</h2>
                  <Collapse in={openENGINE}>
                    <div>
                      <p className="des">
                        Fitted with an exclusive &rsquo;Inspire Sport&lsquo;
                        interior, the DBX707 elegantly aligns sport and luxury.
                        An Alcantara headlining, heated and ventilated seats and
                        semi-aniline leather upholstery completes an ultra
                        luxurious look and feel.
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div
                  className="img-thumb"
                  style={{ backgroundImage: `url(${CarInteriorSeat.src})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* info-thumb Section End */}

      {/* Info Blocks Start */}
      <div className="multi-info-block">
        <Container fluid="xxl">
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">After-sales with Dealer X</h3>
                  <p className="description">
                    Choosing to buy an Aston Martin with us means choosing the
                    expertise of Aston Martin approved technicians. Our
                    after-sales team offer everything from skilled servicing,
                    extensive accident repairs or bespoke modifications.
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.DesignerNewCar}
                  >
                    Explore after-sales
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={images.DealerMartinImg}
                  alt="DealerMartinImg"
                />
              </div>
            </div>
          </div>
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={images.CustomiseMartinImg}
                  alt="CustomiseMartinImg"
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">Customise an Aston Martin</h3>
                  <p className="description">
                    Use the Aston Martin configurator to design the car of your
                    dreams. From specific grille finishes to the colour of your
                    hand stitched leather interior, take your new Aston Martin
                    to new levels of luxury and customise a car like no other.
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.DesignerNewCar}
                  >
                    Start configuration
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/*  */}

      {/* Aston Martin Address Start */}
      <AvailableLocation dealers={[]} />
      {/* Aston Martin Address End */}
    </>
  );
};
export default DesignerExploreModel;
