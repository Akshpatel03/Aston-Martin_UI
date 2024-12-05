/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import images from "@/public/images";
import Image from "next/image";
import {
  Accordion,
  Button,
  Collapse,
  Container,
  Form,
  Offcanvas,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlotCounter from "react-slot-counter";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";
import DatePicker from "react-datepicker";
import DBX707Green from "@/public/images/home/DBX707-green.png";
import DBX707GreenBack from "@/public/images/explore-model/DBX707-green-back.png";
import Select from "react-select";
import Stepper from "@/components/Stepper";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AvailableLocation from "@/components/AvailableLocation";
import homePageService from "@/services/home-page-service";
import {  GetStaticPaths, GetStaticProps } from "next";
import { IDealer } from "@/utils/interface/home";
import contentfulService from "@/services/contentful-service";
import {
  ModelReviews,
  HeadingandSubHeading,
  ModelSpecifications,
  PageContent,
  PageNavigation,
  SpecificationOverview,
} from "@/utils/interface/landing-page";

interface IExploreProps {
  dealers: IDealer[];
  exploreBannerData: PageContent;
  exploreSubheadingData: HeadingandSubHeading;
  exploreSpecificationOverviewData: SpecificationOverview[];
  exploreModelPerformanceData: PageContent[];
  explorePromotionalMessageData: ModelReviews[];
  exploreExteriorData: HeadingandSubHeading[];
  exploreInteriorData: PageContent[];
  exploreInfoBlockData: PageNavigation[];
  exploreModelSpecificationsData: ModelSpecifications[];
}

const Explore: React.FC<IExploreProps> = ({
  dealers,
  exploreBannerData,
  exploreSubheadingData,
  exploreSpecificationOverviewData,
  exploreModelPerformanceData,
  explorePromotionalMessageData,
  exploreExteriorData,
  exploreInteriorData,
  exploreInfoBlockData,
  exploreModelSpecificationsData,
}) => {
  const navigate = useRouter();
  const [startDate] = React.useState();
  const [openENGINE, setENGINEOpen] = useState(true);
  const [openCarHandling, setCarHandlingOpen] = useState(true);
  const [openCarBreak, setCarBreakOpen] = useState(true);
  const [specificationDrawer, setSpecificationDrawer] = useState(false);
  const [equireDrawer, setEquireDrawer] = useState(false);
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

  // stepper -------------------------------------------
  const stepperData = [
    { id: 1, name: "Nature of enquiry" },
    { id: 2, name: "Contact details" },
    { id: 3, name: "Preferred dealership" },
    { id: 4, name: "Schedule test drive" },
  ];

  const [showStepper, setShowStepper] = useState(true);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const goToNextStep = () => {
    setCurrentStep((next) => {
      if (next === stepperData.length) {
        setIsComplete(true);
        return next;
      } else {
        return next + 1;
      }
    });
  };
  const goToPreviousStep = () => {
    setCurrentStep((prev) => {
      if (prev <= 0) {
        return prev;
      } else {
        setIsComplete(false);
        return prev - 1;
      }
    });
  };
  const handleReturnHome = () => {
    navigate.push(ROUTES.Home);
    setTimeout(() => {
      setShowStepper(true);
      setCurrentStep(0);
    }, 500);
  };

  const options = [
    { value: "option1", label: "12 Friar Street, Reading, RG1 1DB" },
    { value: "option2", label: "14 Friar Street, Reading, RG1 1DB" },
    { value: "option3", label: "15 Friar Street, Reading, RG1 1DB" },
  ];

  return (
    <>
      {/* Hero Banner Start */}
      <div className="hero-banner size-lg">
        {isClient && (
          <ReactPlayer
            url={exploreBannerData.imageFile.url}
            className="banner-video"
            playing
            loop
            muted
          />
        )}
        <p className="label">{exploreBannerData.tag}</p>
        <h1 className="title">{exploreBannerData.title}</h1>
        <p className="description mb-0">{exploreBannerData.description}</p>
        <div className="action" data-swiper-parallax="-500">
          <Button
            className="size-lg"
            variant="light"
            onClick={() => {
              setEquireDrawer(true);
              setShowStepper(true);
              setCurrentStep(0);
              setIsComplete(false);
            }}
          >
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
                <h3 className="title am">{exploreSubheadingData.title}</h3>
                <p className="description">
                  {exploreSubheadingData.description1}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                className="right-side-image"
                src={`http:${exploreSubheadingData.imageFile.url}`}
                width={exploreSubheadingData.imageFile.details.image.width}
                height={exploreSubheadingData.imageFile.details.image.height}
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
            {exploreSpecificationOverviewData.map((specification, index) => (
              <li className="count-item" key={index}>
                <p className="title">
                  {specification.specificationAttribute}{" "}
                  <span>{specification.specificationUnit}</span>
                </p>
                <div className="count">
                  <SlotCounter
                    value={specification.specificationValue}
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -100px 0px",
                    }}
                  />
                </div>
              </li>
            ))}
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
                    {exploreModelPerformanceData[0].tag}
                    <Button
                      className="acc-btn"
                      onClick={() => setENGINEOpen(!openENGINE)}
                      aria-expanded={openENGINE}
                    >
                      <Image src={images.ChevronDownDark} alt="Previous" />
                    </Button>
                  </label>
                  <h2 className="title am">
                    {exploreModelPerformanceData[0].title}
                  </h2>
                  <Collapse in={openENGINE}>
                    <div>
                      <p className="des">
                        {exploreModelPerformanceData[0].description}
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div
                  className="img-thumb"
                  style={{
                    backgroundImage: `url(${exploreModelPerformanceData[0].imageFile.url})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        {exploreModelPerformanceData[1].tag}
                        <Button
                          className="acc-btn"
                          onClick={() => setCarHandlingOpen(!openCarHandling)}
                          aria-expanded={openCarHandling}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
                      </label>
                      <h3 className="title am">
                        {exploreModelPerformanceData[1].title}
                      </h3>
                      <Collapse in={openCarHandling}>
                        <div>
                          <p className="des">
                            {exploreModelPerformanceData[1].description}
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{
                        backgroundImage: `url(${exploreModelPerformanceData[1].imageFile.url})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        {exploreModelPerformanceData[2].tag}
                        <Button
                          className="acc-btn"
                          onClick={() => setCarBreakOpen(!openCarBreak)}
                          aria-expanded={openCarBreak}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
                      </label>
                      <h3 className="title am">
                        {exploreModelPerformanceData[2].title}
                      </h3>
                      <Collapse in={openCarBreak}>
                        <div>
                          <p className="des">
                            {exploreModelPerformanceData[2].description}
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{
                        backgroundImage: `url(${exploreModelPerformanceData[2].imageFile.url})`,
                      }}
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
        paragraph={explorePromotionalMessageData[0].reviewMessage}
        owner={explorePromotionalMessageData[0].authorName}
        ownerDesignation={explorePromotionalMessageData[0].authorDesignation}
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
        {exploreExteriorData.map((exteriorData, index) => (
          <SwiperSlide key={index}>
            <p className="label" data-swiper-parallax="-300">
              {exteriorData.title}
            </p>
            <h1 className="title" data-swiper-parallax="-400">
              {exteriorData.description1}
            </h1>
            <p className="description mb-4" data-swiper-parallax="-500">
              {exteriorData.description2}
            </p>
            <p className="description m-0" data-swiper-parallax="-500">
              {exteriorData.description3}
            </p>
            <Image
              className="banner-img"
              src={`http:${exteriorData.imageFile.url}`}
              width={exteriorData.imageFile.details.image.width}
              height={exteriorData.imageFile.details.image.height}
              alt="CarExteriorImg"
            />
          </SwiperSlide>
        ))}
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
                        {exploreInteriorData[0].tag}
                        <Button
                          className="acc-btn"
                          onClick={() => setCarHandlingOpen(!openCarHandling)}
                          aria-expanded={openCarHandling}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
                      </label>
                      <h3 className="title am">
                        {exploreInteriorData[0].title}
                      </h3>
                      <Collapse in={openCarHandling}>
                        <div>
                          <p className="des">
                            {exploreInteriorData[0].description}
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{
                        backgroundImage: `url(${exploreInteriorData[0].imageFile.url})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="info-thumb-card side h-100">
                    <div className="info">
                      <label className="am head subtitle1">
                        {exploreInteriorData[1].tag}
                        <Button
                          className="acc-btn"
                          onClick={() => setCarBreakOpen(!openCarBreak)}
                          aria-expanded={openCarBreak}
                        >
                          <Image src={images.ChevronDownDark} alt="Previous" />
                        </Button>
                      </label>
                      <h3 className="title am">
                        {exploreInteriorData[1].title}
                      </h3>
                      <Collapse in={openCarBreak}>
                        <div>
                          <p className="des">
                            {exploreInteriorData[1].description}
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="img-thumb"
                      style={{
                        backgroundImage: `url(${exploreInteriorData[1].imageFile.url})`,
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
                    {exploreInteriorData[2].tag}
                    <Button
                      className="acc-btn"
                      onClick={() => setENGINEOpen(!openENGINE)}
                      aria-expanded={openENGINE}
                    >
                      <Image src={images.ChevronDownDark} alt="Previous" />
                    </Button>
                  </label>
                  <h2 className="title am">{exploreInteriorData[2].title}</h2>
                  <Collapse in={openENGINE}>
                    <div>
                      <p className="des">
                        {exploreInteriorData[2].description}
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div
                  className="img-thumb"
                  style={{
                    backgroundImage: `url(${exploreInteriorData[2].imageFile.url})`,
                  }}
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
        paragraph={explorePromotionalMessageData[1].reviewMessage}
        owner={explorePromotionalMessageData[1].authorName}
        ownerDesignation={explorePromotionalMessageData[1].authorDesignation}
      />
      {/* Text Animation End */}

      {/* Info Blocks Start */}
      <div className="multi-info-block">
        <Container fluid="xxl">
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">{exploreInfoBlockData[0].title}</h3>
                  <p className="description">
                    {exploreInfoBlockData[0].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.NewCar}
                  >
                    {exploreInfoBlockData[0].navigationLink}
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={`http:${exploreInfoBlockData[0].imageFile.url}`}
                  width={exploreInfoBlockData[0].imageFile.details.image.width}
                  height={
                    exploreInfoBlockData[0].imageFile.details.image.height
                  }
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
                  src={`http:${exploreInteriorData[1].imageFile.url}`}
                  width={exploreInteriorData[1].imageFile.details.image.width}
                  height={exploreInteriorData[1].imageFile.details.image.height}
                  alt="CustomiseMartinImg"
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">{exploreInfoBlockData[1].title}</h3>
                  <p className="description">
                    {exploreInfoBlockData[1].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.NewCar}
                  >
                    {exploreInfoBlockData[1].navigationLink}
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
      <AvailableLocation dealers={dealers} />
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
            {exploreModelSpecificationsData.map((specification, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{specification.title}</Accordion.Header>
                <Accordion.Body>
                  <ul className="specs-lisitng">
                    {specification.specifications.map((specs,index) => 
                      <li key={index}>{specs}</li>
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Offcanvas Right Start */}

      {/* Offcanvas enquire Start */}
      <Offcanvas
        scroll={false}
        show={equireDrawer}
        placement={offcanavasPlacement}
        onHide={() => {
          setEquireDrawer(false);
          setTimeout(() => {
            setShowStepper(true);
          }, 500);
        }}
      >
        <Button
          className="btn-icon canvas-close"
          variant="light"
          onClick={() => {
            setEquireDrawer(false);
            setTimeout(() => {
              setShowStepper(true);
            }, 500);
          }}
        >
          <Image src={images.CloseBlack} alt="Close Icon" />
        </Button>
        <Offcanvas.Body className="enquiry-wrapper-drawer">
          {showStepper ? (
            <>
              <div className="stepper-head">
                <h3>Make an Enquiry</h3>
                <span className="selected-enquiry">Sale/purchase enquiry</span>
                <Stepper
                  stepsConfig={stepperData}
                  currentStep={currentStep}
                  isComplete={isComplete}
                />
              </div>
              <div className="stepper-body">
                <div className="enquiry-form">
                  {currentStep === 0 ? (
                    <>
                      <h5 className="form-title mb-40p">
                        Tell us about the nature of your enquiry below
                      </h5>

                      <p className="secondary-form-title">Select</p>
                      <ToggleButtonGroup
                        className="toggle-radio"
                        type="radio"
                        name="options"
                      >
                        <ToggleButton
                          className="mirror-card"
                          id="tbg-radio-1"
                          value={1}
                          variant="light"
                        >
                          Sale/purchase
                          <span className="highlighted">Sale/purchase</span>
                        </ToggleButton>
                        <ToggleButton
                          className="mirror-card"
                          id="tbg-radio-2"
                          value={2}
                          variant="light"
                        >
                          Book a test drive
                          <span className="highlighted">Book a test drive</span>
                        </ToggleButton>
                        <ToggleButton
                          className="mirror-card"
                          id="tbg-radio-3"
                          value={3}
                          variant="light"
                        >
                          General
                          <span className="highlighted">General</span>
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </>
                  ) : (
                    ""
                  )}

                  {currentStep === 1 ? (
                    <>
                      <h5 className="form-title mb-40p">
                        Please provide us with your personal details and contact
                        information
                      </h5>
                      <p className="secondary-form-title">Title</p>
                      <Form className="inline-level justify-content-sm-start justify-content-between column-gap-sm-5 row-gap-3 mb-24p">
                        <Form.Check
                          type="radio"
                          label="Mr"
                          name="gender"
                          defaultChecked
                          id="RadioMr"
                        />
                        <Form.Check
                          type="radio"
                          label="Mrs"
                          name="gender"
                          id="RadioMrs"
                        />
                        <Form.Check
                          type="radio"
                          label="Miss"
                          name="gender"
                          id="RadioMiss"
                        />
                        <Form.Check
                          type="radio"
                          label="Ms"
                          name="gender"
                          id="RadioMs"
                        />
                      </Form>
                      <div className="row">
                        <div className="col-sm-6">
                          <Form.Group className="mb-24p">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>
                        </div>
                        <div className="col-sm-6">
                          <Form.Group className="mb-24p">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>
                        </div>
                      </div>
                      <Form.Group className="mb-24p">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-24p">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Label className="text-neutral50 d-block">
                          Include the country code (e.g. +44)
                        </Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-24p">
                        <Form.Label>Address</Form.Label>
                        <Select
                          className="react-custom-select with-text"
                          classNamePrefix="select"
                          options={options}
                        />
                      </Form.Group>
                      <div className="mb-24p">
                        <Link
                          className="quick-link color-primary align-items-start"
                          href={ROUTES.NewCar}
                        >
                          Enter your address manually
                          <Image src={images.ChevronDownPrimary} alt="More" />
                        </Link>
                      </div>
                      <Form.Group className="mb-24p">
                        <Form.Label>Your enquiry</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>

                      <p className="secondary-form-title">
                        How you would like us to contact with you
                      </p>
                      <Form className="inline-level gap-3 mb-24p">
                        <Form.Check
                          type="radio"
                          label="No preference"
                          name="contact"
                          defaultChecked
                          id="RadioNP"
                        />
                        <Form.Check
                          type="radio"
                          label="Email"
                          name="contact"
                          id="RadioEmail"
                        />
                        <Form.Check
                          type="radio"
                          label="Phone"
                          name="contact"
                          id="RadioPhone"
                        />
                      </Form>

                      <Form.Label>
                        Would you like to receive news and updates from Dealer
                        X? If so, please select your contact preferences.
                      </Form.Label>
                      <Form className="inline-level gap-3 mb-24p">
                        <Form.Check
                          type="checkbox"
                          label="Email"
                          defaultChecked
                          id="checkEmail"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Phone"
                          id="checkPhone"
                        />
                        <Form.Check type="checkbox" label="SMS" id="checkSms" />
                      </Form>

                      <p className="body2 text-neutral50">
                        By submitting this form, you are giving consent for a
                        member of the Dealer X team to contact you using the
                        personal information provided for the purposes which are
                        directly related to this enquiry.
                      </p>
                    </>
                  ) : (
                    ""
                  )}

                  {currentStep === 2 ? (
                    <>
                      <h5 className="form-title mb-40p">
                        Let us know your preferred dealership location
                      </h5>
                      <Form.Label>
                        Search by country, city or address
                      </Form.Label>
                      <div className="input-group mb-24p space">
                        <Form.Group className="w-100">
                          <Select
                            className="react-custom-select with-text"
                            classNamePrefix="select"
                            options={options}
                          />
                        </Form.Group>
                        <Button variant="secondary" className="size-lg">
                          Use my location
                          <em className="ic right">
                            <Image src={images.IcLocMark} alt="" />
                          </em>
                        </Button>
                      </div>

                      <Form.Group className="mb-3">
                        <Form.Label>Select dealership</Form.Label>
                        <Select
                          className="react-custom-select"
                          classNamePrefix="select"
                          isSearchable={false}
                          options={options}
                        />
                      </Form.Group>
                    </>
                  ) : (
                    ""
                  )}

                  {currentStep === 3 || currentStep === 4 ? (
                    <>
                      <p className="secondary-form-title am-sans mb-3">
                        Please select a preferred date for a test drive
                      </p>
                      <div className="mb-lg-5 mb-4">
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
                                {new Intl.DateTimeFormat("en-US", {
                                  month: "long",
                                  year: "numeric",
                                }).format(date)}
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
                      <ToggleButtonGroup
                        className="toggle-chips"
                        type="radio"
                        name="time-slot-options"
                      >
                        <ToggleButton
                          className="toggle-button"
                          id="time-slot-radio-1"
                          value={1}
                          variant="secondary"
                        >
                          10:00 <sup>AM</sup>
                        </ToggleButton>
                        <ToggleButton
                          className="toggle-button"
                          id="time-slot-radio-2"
                          value={2}
                          variant="secondary"
                        >
                          11:30 <sup>AM</sup>
                        </ToggleButton>
                        <ToggleButton
                          className="toggle-button"
                          id="time-slot-radio-3"
                          value={3}
                          variant="secondary"
                        >
                          12:00 <sup>AM</sup>
                        </ToggleButton>
                        <ToggleButton
                          className="toggle-button"
                          id="time-slot-radio-4"
                          value={4}
                          variant="secondary"
                        >
                          1:30 <sup>PM</sup>
                        </ToggleButton>
                        <ToggleButton
                          className="toggle-button"
                          id="time-slot-radio-5"
                          value={5}
                          variant="secondary"
                        >
                          2:00 <sup>PM</sup>
                        </ToggleButton>
                        <ToggleButton
                          className="toggle-button"
                          id="time-slot-radio-6"
                          value={6}
                          variant="secondary"
                        >
                          3:30 <sup>PM</sup>
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </>
                  ) : (
                    ""
                  )}

                  <div className="action mt-auto">
                    {currentStep !== 0 ? (
                      <Button
                        variant="secondary"
                        className="size-lg"
                        onClick={goToPreviousStep}
                        disabled={currentStep === 0}
                      >
                        Back
                      </Button>
                    ) : (
                      ""
                    )}
                    {currentStep < 3 ? (
                      <Button
                        variant="primary"
                        className="size-lg ms-auto"
                        onClick={goToNextStep}
                        disabled={currentStep === stepperData.length}
                      >
                        Next
                        <em className="ic right">
                          <Image src={images.ArrowNarrowRightSMWhite} alt="" />
                        </em>
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className="size-lg"
                        onClick={() => setShowStepper(false)}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
                <div className="enquiry-car">
                  <div className="car-detail">
                    <p className="car-badge">Power. Driven.</p>
                    <h1 className="title">DBX707</h1>
                  </div>
                  <img
                    src={DBX707Green.src}
                    alt="DBX707Green"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="enquiry-summary">
              <div className="form-summary">
                <h1 className="am">Thank you for your enquiry John</h1>

                <p className="grey-text">
                  A member of our team will be in touch to discuss your enquiry
                  shortly.
                </p>

                <div className="detail-block">
                  <h5 className="detail-title">Personal details</h5>
                  <ul className="detail-lisitng">
                    <li>
                      <p className="label">Name</p>
                      <p className="value">John Smith</p>
                    </li>
                    <li>
                      <p className="label">Email</p>
                      <p className="value">john.smith@gmail.com</p>
                    </li>
                    <li>
                      <p className="label">Address</p>
                      <p className="value">12 Friar Street, Reading, RG1 1DB</p>
                    </li>
                    <li>
                      <p className="label">Phone number</p>
                      <p className="value">07735478560</p>
                    </li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h5 className="detail-title">Preferred dealership</h5>
                  <ul className="detail-lisitng">
                    <li>
                      <p className="label">Name</p>
                      <p className="value">Aston Martin Reading</p>
                    </li>
                    <li>
                      <p className="label">Address</p>
                      <p className="value">
                        Aston Martin, Station Rd, Pangbourne, Reading RG8 7AN
                      </p>
                    </li>
                    <li>
                      <p className="label">Phone number</p>
                      <p className="value">0333 014 4445</p>
                    </li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h5 className="detail-title">Enquiry message</h5>
                  <ul className="detail-lisitng">
                    <li>
                      <p className="label">Your enquiry</p>
                      <p className="value">
                        I&rsquo;m interested in booking a test drive with the
                        Aston Martin DBX707 and would like to know more about
                        the model shown on the Dealer X website.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h5 className="detail-title">Test drive booking</h5>
                  <ul className="detail-lisitng">
                    <li>
                      <p className="label">Date:</p>
                      <p className="value">11/08/2023</p>
                    </li>
                    <li>
                      <p className="label">Time:</p>
                      <p className="value">11.30 am</p>
                    </li>
                  </ul>
                </div>

                <Button
                  className="size-lg w-sm-auto w-100"
                  variant="primary"
                  onClick={handleReturnHome}
                >
                  Return to the home page
                </Button>
              </div>
              <div className="car-model">
                <img src={DBX707GreenBack.src} alt="DBX707GreenBack" />
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      {/* Offcanvas enquire Start */}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const exploreRouteRes = await contentfulService.getExploreModelRoutes();
  const exploreModelRoutes = exploreRouteRes.data.item;
  const paths = exploreModelRoutes.map((car) => ({
    params: { model: car },
  }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const currentRoute = params?.model as string;
  if(!currentRoute){
    return { notFound: true };
  }
  const res = await homePageService.getAllBranches();
  const newCarsPageRes = await contentfulService.getHomePageContent(currentRoute);
  const explorePageData = newCarsPageRes.data.item;
  const exploreBannerData = explorePageData.content["Explore Model Banner"][0];
  const exploreSubheadingData = explorePageData.content["Explore Model Sub Heading"][0];
  const exploreSpecificationOverviewData = explorePageData.content["DBX707 Model Specification Overview"];
  const exploreModelPerformanceData = explorePageData.content["Explore Model Performance"];
  const explorePromotionalMessageData = explorePageData.content["Explore Model Promotional Text"];
  const exploreExteriorData = explorePageData.content["Explore Model Exterior"];
  const exploreInteriorData = explorePageData.content["Explore Model Interior"];
  const exploreInfoBlockData = explorePageData.content["New Cars Info Block"];
  const exploreModelSpecificationsData = explorePageData.content["DBX707 Model Specifications"];
  return {
    props: {
      dealers: res.item.dealers,
      exploreBannerData,
      exploreSubheadingData,
      exploreSpecificationOverviewData,
      exploreModelPerformanceData,
      explorePromotionalMessageData,
      exploreExteriorData,
      exploreInteriorData,
      exploreInfoBlockData,
      exploreModelSpecificationsData,
    },
  };
};

export default Explore;
