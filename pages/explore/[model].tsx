/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import images from "@/public/images";
import Image from "next/image";
import {
  Accordion,
  Button,
  Collapse,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlotCounter from "react-slot-counter";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AvailableLocation from "@/components/AvailableLocation";
import homePageService from "@/services/home-page-service";
import { GetStaticPaths, GetStaticProps } from "next";
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
import Inquiry from "@/components/Inquiry";

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
                    {specification.specifications.map((specs, index) => (
                      <li key={index}>{specs}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Offcanvas Right Start */}

      {/* Offcanvas enquire Start */}
      <Inquiry
        equireDrawer={equireDrawer}
        setEquireDrawer={setEquireDrawer}
        enquireData={{
          tag: exploreBannerData.tag,
          modelName: exploreBannerData.title,
        }}
      />
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentRoute = params?.model as string;
  if (!currentRoute) {
    return { notFound: true };
  }
  const res = await homePageService.getAllBranches();
  const newCarsPageRes = await contentfulService.getHomePageContent(
    currentRoute
  );
  const explorePageData = newCarsPageRes.data.item;
  const exploreBannerData = explorePageData.content["Explore Model Banner"][0];
  const exploreSubheadingData =
    explorePageData.content["Explore Model Sub Heading"][0];
  const exploreSpecificationOverviewData =
    explorePageData.content["DBX707 Model Specification Overview"];
  const exploreModelPerformanceData =
    explorePageData.content["Explore Model Performance"];
  const explorePromotionalMessageData =
    explorePageData.content["Explore Model Promotional Text"];
  const exploreExteriorData = explorePageData.content["Explore Model Exterior"];
  const exploreInteriorData = explorePageData.content["Explore Model Interior"];
  const exploreInfoBlockData = explorePageData.content["New Cars Info Block"];
  const exploreModelSpecificationsData =
    explorePageData.content["DBX707 Model Specifications"];
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
