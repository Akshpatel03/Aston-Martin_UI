import React, { useEffect, useState } from "react";
import AvailableLocation from "@/components/AvailableLocation";
import Testimonials from "@/components/Testimonials";
import images from "@/public/images";
import Image from "next/image";
import { Button, Collapse } from "react-bootstrap";
import EngineImg from "@/public/images/new-car-model/engine-img.jpg";
import CarHandlingImg from "@/public/images/new-car-model/car-handling-img.jpg";
import BreakImg from "@/public/images/new-car-model/break-img.jpg";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        {/* <video autoPlay muted loop id="myVideo">
          <source src={myVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video> */}
        <p className="label">Power. driven.</p>
        <h1 className="title">Aston Martin DBX707</h1>
        <p className="description ">
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
          <ul>
            <li>
              <h6>
                POWER<span>PS</span>
              </h6>
              707
            </li>
          </ul>
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
        className="hero-banner-slider default-slider"
      >
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">
            EXTERIOR
          </p>
          <h1 className="title" data-swiper-parallax="-400">
            Hero banner title
          </h1>
          <p className="description" data-swiper-parallax="-500">
            The DBX707, the performance SUV, exudes its own style and muscular
            beauty.{" "}
          </p>
          <p className="description" data-swiper-parallax="-500">
            With dark satin chrome window surrounds and newly designed louvred
            bonnet blades, the heavily sculpted front grille leads to a stylish
            carbon fibre rear spoiler to complete an iconic and aerodynamic SUV
            silhouette.
          </p>
          <Image className="banner-img" src={images.Hero1} alt="Hero1" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">
            Power. Driven.
          </p>
          <h1 className="title" data-swiper-parallax="-400">
            Aston Martin DBX707
          </h1>
          <p className="description" data-swiper-parallax="-500">
            The most powerful luxury SUV
          </p>
          <Image className="banner-img" src={images.Hero1} alt="Hero1" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">
            Power. Driven.
          </p>
          <h1 className="title" data-swiper-parallax="-400">
            Aston Martin DBX707
          </h1>
          <p className="description" data-swiper-parallax="-500">
            The most powerful luxury SUV
          </p>
          <div className="w-sm-auto w-100" data-swiper-parallax="-600">
            <Button className="size-lg w-sm-auto w-100" variant="light">
              Explore
            </Button>
          </div>
          <Image className="banner-img" src={images.Hero1} alt="Hero1" />
        </SwiperSlide>
      </Swiper>
      {/* Hero Banner End */}

      {/* Aston Martin Address Start */}
      <AvailableLocation />
      {/* Aston Martin Address End */}

      {/* Testimonial Start */}
      <Testimonials />
      {/* Testimonial End */}
    </>
  );
};
export default DesignerExploreModel;
