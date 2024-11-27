/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import AvailableLocation from "@/components/AvailableLocation";
import images from "@/public/images";
import Image from "next/image";
import {
  Accordion,
  Button,
  Collapse,
  Container,
  Offcanvas,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import EngineImg from "@/public/images/explore-model/engine-img.jpg";
import CarHandlingImg from "@/public/images/explore-model/car-handling-img.jpg";
import BreakImg from "@/public/images/explore-model/break-img.jpg";
import CarInteriorControl from "@/public/images/explore-model/car-interior-control-img.jpg";
import CarInteriorFinishing from "@/public/images/explore-model/car-interior-finishing-img.jpg";
import CarInteriorSeat from "@/public/images/explore-model/car-interior-seat-img.svg";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlotCounter from "react-slot-counter";
import dynamic from "next/dynamic";
import ReactPlayer from 'react-player'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";
import videos from "@/public/videos";
import DBX707Green from "@/public/images/home/DBX707-green.png"
import DatePicker from "react-datepicker";

const DesignerExploreModel = () => {
  const [startDate] = React.useState();

  // collapse
  const [openENGINE, setENGINEOpen] = useState(true);
  const [openCarHandling, setCarHandlingOpen] = useState(true);
  const [openCarBreak, setCarBreakOpen] = useState(true);

  // off canvas state
  const [specificationDrawer, setSpecificationDrawer] = useState(false);
  const [equireDrawer, setequireDrawer] = useState(false);
  const [offcanavasPlacement, setoffcanavasPlacement] = useState<
    "start" | "end" | "top" | "bottom"
  >("end");

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

      // offcanvas placement
      if (window.innerWidth < 1199) {
        setoffcanavasPlacement("bottom");
      } else {
        setoffcanavasPlacement("end");
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

  const TextAnimation = dynamic(() => import("@/components/TextAnimation"), {
    ssr: false,
  });

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  return (
    <>
      {/* Hero Banner Start */}
      <div className="hero-banner size-lg">
        {isClient && (
          <ReactPlayer
            url={videos.ExploreDBX707}
            className="banner-video"
            playing
            loop
            muted
          />
        )}
        <p className="label">Power. driven.</p>
        <h1 className="title">Aston Martin DBX707</h1>
        <p className="description mb-0">
          The world&apos;s most powerful luxury SUV
        </p>
        <div className="action" data-swiper-parallax="-500">
          <Button className="size-lg" variant="light" onClick={() => setequireDrawer(true)}>
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
              <div className="info  pb-4 pb-lg-0 pt-0">
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
            <div className="col-lg-6">
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
                <SlotCounter
                  value={707}
                  animateOnVisible={{
                    triggerOnce: false,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                />
              </div>
            </li>
            <li className="count-item">
              <p className="title">
                TOP SPEED <span>MPH</span>
              </p>
              <div className="count">
                <SlotCounter
                  value={193}
                  animateOnVisible={{
                    triggerOnce: false,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                />
              </div>
            </li>
            <li className="count-item">
              <p className="title">
                0-62 MPH <span>S</span>
              </p>
              <div className="count">
                <SlotCounter
                  value={3.3}
                  animateOnVisible={{
                    triggerOnce: false,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                />
              </div>
            </li>
            <li className="count-item">
              <p className="title">
                TORQUE <span>NM</span>
              </p>
              <div className="count">
                <SlotCounter
                  value={900}
                  animateOnVisible={{
                    triggerOnce: false,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                />
              </div>
            </li>
          </ul>

          <Button
            className="size-lg"
            variant="mid-transparent"
            onClick={() => setSpecificationDrawer(true)}
          >
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
                    <Button
                      className="acc-btn"
                      onClick={() => setENGINEOpen(!openENGINE)}
                      aria-expanded={openENGINE}
                    >
                      <Image src={images.ChevronDownDark} alt="Previous" />
                    </Button>
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
                        <Button
                          className="acc-btn"
                          onClick={() => setCarHandlingOpen(!openCarHandling)}
                          aria-expanded={openCarHandling}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
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
                        <Button
                          className="acc-btn"
                          onClick={() => setCarBreakOpen(!openCarBreak)}
                          aria-expanded={openCarBreak}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
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

      {/* Text Animation Start */}
      <TextAnimation
        paragraph="Our objective was to match immense performance with impeccable control and precision, combined with an authentic sporting character essential in every Aston Martin model."
        owner="Drummond Jacoy"
        ownerDesignation="Head of Vehicle Engineering and Procurement, Aston Martin"
      />
      {/* Text Animation End */}

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
                        <Button
                          className="acc-btn"
                          onClick={() => setCarHandlingOpen(!openCarHandling)}
                          aria-expanded={openCarHandling}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
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
                        <Button
                          className="acc-btn"
                          onClick={() => setCarBreakOpen(!openCarBreak)}
                          aria-expanded={openCarBreak}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
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
                    <Button
                      className="acc-btn"
                      onClick={() => setENGINEOpen(!openENGINE)}
                      aria-expanded={openENGINE}
                    >
                      <Image src={images.ChevronDownDark} alt="Previous" />
                    </Button>
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

      {/* Text Animation Start */}
      <TextAnimation
        classname="black-bg"
        paragraph="The DBX707 encapsulates raw power, relentless architectural design and master craftsmanship that can only be seen from a marque as renowned as Aston Martin."
        owner="Sam Field"
        ownerDesignation="Technician, Dealer X"
      />
      {/* Text Animation End */}

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
      {/* Info Blocks End */}

      {/* Aston Martin Address Start */}
      <AvailableLocation />
      {/* Aston Martin Address End */}

      {/* Offcanvas Right Start */}
      <Offcanvas
        scroll={false}
        placement={offcanavasPlacement}
        show={specificationDrawer}
        onHide={() => setSpecificationDrawer(false)}
      >
        <Button
          className="btn-icon canvas-close"
          variant="light"
          onClick={() => setSpecificationDrawer(false)}
        >
          <Image src={images.CloseBlack} alt="Close Icon" />
        </Button>
        <Offcanvas.Body className="specs-wrapper">
          <h2 className="specs-title">Specifications</h2>
          <Accordion
            className="specs"
            defaultActiveKey={["0", "1", "2"]}
            alwaysOpen
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Body</Accordion.Header>
              <Accordion.Body>
                <ul className="specs-lisitng">
                  <li>Two-door body style with decklid and 2 GT seats</li>
                  <li>
                    Extruded bonded aluminium body structure with Cast Magnesium
                    door structures
                  </li>
                  <li>
                    LED headlamps with integrated daytime running, side lights
                    and cornering lights
                  </li>
                  <li>LED light blade taillamps</li>
                  <li>Curlicue aero feature in front fender</li>
                  <li>
                    Deployable spoiler with Aston Martin Aeroblade™ system ₁
                  </li>
                  <li>One-piece clamshell with soft-close latches</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Engine</Accordion.Header>
              <Accordion.Body>
                <ul className="specs-lisitng">
                  <li>
                    All-alloy quad overhead cam, 48 valve, 5.2l bi-turbo, V12
                    with stop/start cylinder de-activation
                  </li>
                  <li>Water-to-Air Charge Cooling</li>
                  <li>Front mid-mounted engine, rear-wheel drive</li>
                  <li>
                    Fully catalysed stainless steel exhaust system with cross
                    pipes
                  </li>
                  <li>Compression ratio 9.3:1</li>
                  <li>Dual Variable Camshaft Timing</li>
                  <li>Knock-sensing</li>
                  <li>Fully CNC machined combustion chambers</li>
                  <li>Electrically controlled exhaust</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Fuel economy & emissions</Accordion.Header>
              <Accordion.Body>
                <p className="specs-para">
                  Official government fuel consumption figures in litres/100km
                  (mpg) for the Aston Martin DB11 V12 Coupe: Urban FE 16.6
                  (17.0); Extra Urban FE 8.5 (33.2); Combined 11.4 (24.8); CO2
                  265 g/km
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Performance & weight</Accordion.Header>
              <Accordion.Body>
                <ul className="specs-lisitng">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Offcanvas Right Start */}

      {/* Offcanvas enquire Start */}
      <Offcanvas
        show={equireDrawer || true}
        placement={offcanavasPlacement}
        onHide={() => setequireDrawer(false)}
      >
        <Button
          className="btn-icon canvas-close"
          variant="light"
          onClick={() => setequireDrawer(false)}
        >
          <Image src={images.CloseBlack} alt="Close Icon" />
        </Button>
        <Offcanvas.Body className="enquiry-wrapper-drawer">
          <div className="stepper-head">
            <h3>Make an Enquiry</h3>
            <span className="selected-enquiry">Sale/purchase enquiry</span>
            <div className="stepper-wrapper">
              <ul className="stepper">
                <li>
                  <em className="i">1</em>
                  Nature of enquiry
                </li>
                <li>
                  <em className="i">2</em>
                  Contact details
                </li>
                <li>
                  <em className="i">3</em>
                  Preferred dealership
                </li>
                <li>
                  <em className="i">4</em>
                  Schedule test drive
                </li>
              </ul>
            </div>
          </div>
          <div className="stepper-body">
            <div className="enquiry-form">
              <h5 className="form-title mb-40p">
                Tell us about the nature of your enquiry below
              </h5>


              <p className="secondary-form-title am-sans mb-3">
                Please select a preferred date for a test drive
              </p>
              <div className="mb-5">
                <DatePicker
                  inline
                  calendarClassName="inline-datepicker"
                  selected={startDate}
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div className="custom-header">
                      <Button
                        className="btn-icon"
                        variant="light"
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        <Image
                          src={images.DatepickerPrev}
                          alt="Datepicker Previous"
                        />
                      </Button>

                      <span className="month_name">
                        {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date)}
                      </span>

                      <Button
                        className="btn-icon"
                        variant="light"
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        <Image
                          src={images.DatepickerNext}
                          alt="Datepicker Next"
                        />
                      </Button>
                    </div>
                  )}
                />
              </div>

              <p className="secondary-form-title am-sans mb-3">
                Please select a preferred time
              </p>
              <ToggleButtonGroup className="toggle-chips" type="radio" name="time-slot-options">
                <ToggleButton className="toggle-button" id="time-slot-radio-1" value={1} variant="secondary">
                  10:00 <sup>AM</sup>
                </ToggleButton>
                <ToggleButton className="toggle-button" id="time-slot-radio-2" value={2} variant="secondary">
                  11:30 <sup>AM</sup>
                </ToggleButton>
                <ToggleButton className="toggle-button" id="time-slot-radio-3" value={3} variant="secondary">
                  12:00 <sup>AM</sup>
                </ToggleButton>
                <ToggleButton className="toggle-button" id="time-slot-radio-4" value={4} variant="secondary">
                  1:30 <sup>PM</sup>
                </ToggleButton>
                <ToggleButton className="toggle-button" id="time-slot-radio-5" value={5} variant="secondary">
                  2:00 <sup>PM</sup>
                </ToggleButton>
                <ToggleButton className="toggle-button" id="time-slot-radio-6" value={6} variant="secondary">
                  3:30 <sup>PM</sup>
                </ToggleButton>
              </ToggleButtonGroup>

              <p className="secondary-form-title">Select</p>
              <ToggleButtonGroup className="toggle-radio" type="radio" name="stepper-option">
                <ToggleButton className="mirror-card" id="tbg-radio-1" value={1} variant="light" >
                  Sale/purchase
                  <span className="highlighted">Sale/purchase</span>
                </ToggleButton>
                <ToggleButton className="mirror-card" id="tbg-radio-2" value={2} variant="light" >
                  Book a test drive
                  <span className="highlighted">Book a test drive</span>
                </ToggleButton>
                <ToggleButton className="mirror-card" id="tbg-radio-3" value={3} variant="light" >
                  General
                  <span className="highlighted">General</span>
                </ToggleButton>
              </ToggleButtonGroup>

            </div>
            <div className="enquiry-car">
              <div className="car-detail">
                <p className="car-badge">Power. Driven.</p>
                <h1 className="title">DBX707</h1>
              </div>
              <img src={DBX707Green.src} alt="DBX707Green" loading="lazy" decoding="async" />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Offcanvas enquire Start */}
    </>
  );
};

export default DesignerExploreModel;
