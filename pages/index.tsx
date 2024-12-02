import images from "@/public/images";
import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";
import Select from "react-select";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";
import AvailableLocation from "@/components/AvailableLocation";
import Testimonials from "@/components/Testimonials";
import homePageService from "@/services/home-page-service";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import News from "@/components/News";
import contentfulLandingPageService from "@/services/contentful-landingPage-service";
import { ContentfulHomePage } from "@/utils/interface/landing-page";
import { IDealer } from "@/utils/interface/home";
interface landingPageProps {
  dealers: IDealer[];
  homePageData: ContentfulHomePage;
}

const Home = (landingPageProps: landingPageProps) => {
  const options = [
    { value: "option1", label: "Model" },
    { value: "option2", label: "Engine" },
    { value: "option3", label: "Wheel" },
  ];

  // Explore Swiper Slider
  const ExploreSlider = useRef<SwiperCore | null>(null);
  const handleExplorePrev = () => {
    if (ExploreSlider.current) {
      ExploreSlider.current.slidePrev();
    }
  };

  const handleExploreNext = () => {
    if (ExploreSlider.current) {
      ExploreSlider.current.slideNext();
    }
  };

  return (
    <>
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
        {landingPageProps.homePageData.content[0].map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (slideData: any, index: any) => (
            <SwiperSlide key={index}>
              <p className="label" data-swiper-parallax="-300">
                {slideData.tag}
              </p>
              <h1 className="title" data-swiper-parallax="-400">
                {slideData.title}
              </h1>
              <p className="description" data-swiper-parallax="-500">
                {slideData.description}
              </p>
              <div className="w-sm-auto w-100" data-swiper-parallax="-600">
                <Button className="size-lg w-sm-auto w-100" variant="light">
                  Explore
                </Button>
              </div>
              <Image
                className="banner-img"
                src={`http:${slideData.imageFile.url}`}
                width={slideData.imageFile.details.image.width}
                height={slideData.imageFile.details.image.height}
                alt={`Hero${index}`}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      {/* Hero Banner End */}

      {/* Search Filter Start */}
      <div className="search-block block-spacing-y-80">
        <Container fluid="xxl">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3>Search Aston Martin cars</h3>
            </div>
            <div className="col-lg">
              <div className="row align-items-center">
                <div className="col-md-auto">
                  <Form className="inline-level gap-5 ms-xl-4">
                    <Form.Check
                      className="dark"
                      type="radio"
                      label="New"
                      name="Search"
                      defaultChecked
                    />
                    <Form.Check
                      className="dark"
                      type="radio"
                      label="Pre-owned"
                      name="Search"
                    />
                  </Form>
                </div>
                <div className="col-sm">
                  <Select
                    className="react-custom-select dark"
                    classNamePrefix="select"
                    options={options}
                    isSearchable={false}
                  />
                </div>
                <div className="col-sm-auto">
                  <Button className="size-lg w-100" variant="light">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Search Filter End */}

      {/* Quick Redirects Start */}
      <div className="quick-redirects block-spacing-y-80 tablet-spacing-y-16">
        <Container fluid="xxl">
          <div className="row row-gap-3">
            {landingPageProps.homePageData.content[1].map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (navigation: any, index: any) => (
                <div key={index} className="col-xxl-3 col-md-6">
                  <div className="quick-link-card">
                    <h4 className="am">{navigation.title}</h4>
                    <Image
                      src={`http:${navigation.imageFile.url}`}
                      width={navigation.imageFile.details.image.width}
                      height={navigation.imageFile.details.image.height}
                      alt="New Car"
                    />
                    <Link className="quick-link" href={ROUTES.DesignerNewCar}>
                      {navigation.navigationLink}
                      <Image src={images.ArrowNarrowRightSMWhite} alt="Next" />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </div>
      {/* Quick Redirects End */}

      {/* Info Section Start */}
      <div className="info-section black block-spacing-y-80">
        <Container fluid="xxl">
          <div className="row align-items-center">
            <div className="col-xl-6 ps-xxxl-0">
              <Image
                className="left-side-image"
                src={`http:${landingPageProps.homePageData.content[2][0].imageFile.url}`}
                width={
                  landingPageProps.homePageData.content[2][0].imageFile.details
                    .image.width
                }
                height={
                  landingPageProps.homePageData.content[2][0].imageFile.details
                    .image.height
                }
                alt="Aston Martin Dealer"
              />
            </div>
            <div className="col-xl-6">
              <div className="info">
                <h3 className="title am">
                  {landingPageProps.homePageData.content[2][0].title}
                </h3>
                <p className="description">
                  {landingPageProps.homePageData.content[2][0].description1}
                </p>
                <p className="description">
                  {landingPageProps.homePageData.content[2][0].description2}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Info Section End */}

      {/* Info Points Start */}
      <div className="block-spacing-y-64 block-spacing-y-64 overflow-hidden">
        <Container fluid="xxl">
          <h2 className="mb-32p am">Why Dealer X?</h2>
          <div className="row info-points-wrapper">
            {landingPageProps.homePageData.content[3].map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (benefit: any, index: any) => (
                <div key={index} className="col-xxl-3 col-md-6 info-points">
                  <h4>{benefit.title}</h4>
                </div>
              )
            )}
          </div>
        </Container>
      </div>
      {/* Info Points End */}

      {/* Product Explore Slider Start */}
      <div className="product-explore-wrapper">
        <h1 className="heading">Explore our Aston Martin model range</h1>
        <Swiper
          onSwiper={(swiper) => {
            ExploreSlider.current = swiper;
          }}
          modules={[Navigation, Parallax]}
          speed={800}
          parallax
          loop
          className="product-explore-slider"
        >
          {landingPageProps.homePageData.content[4].map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (range: any, index: any) => (
              <SwiperSlide key={index}>
                <Image
                  className="model-crop"
                  src={`http:${range.imageFile.url}`}
                  width={range.imageFile.details.image.width}
                  height={range.imageFile.details.image.height}
                  alt="model"
                />
                <div className="slider-handler">
                  <div className="header">
                    <Button
                      className="btn-icon swiper-button-prev"
                      variant="text"
                      onClick={handleExplorePrev}
                    >
                      <Image
                        src={images.ArrowNarrowLeftLongTailWhite}
                        alt="Previous"
                      />
                    </Button>
                    <div className="header-info">
                      <p className="label" data-swiper-parallax="-200">
                        {range.tag}
                      </p>
                      <h1 className="title" data-swiper-parallax="-300">
                        {range.title}
                      </h1>
                    </div>
                    <Button
                      className="btn-icon swiper-button-next"
                      variant="text"
                      onClick={handleExploreNext}
                    >
                      <Image
                        src={images.ArrowNarrowRightLongTailWhite}
                        alt="Next"
                      />
                    </Button>
                  </div>
                  <p className="description" data-swiper-parallax="-400">
                    {range.description}
                  </p>
                  <div className="action" data-swiper-parallax="-500">
                    <Button className="size-lg" variant="light">
                      New
                    </Button>
                    <Button className="size-lg" variant="primary">
                      Pre-owned
                    </Button>
                  </div>
                </div>
                <Image
                  className="banner-img"
                  src={images.ExploreProductDBX707GreenBG}
                  alt="Hero1"
                />
                <Image
                  className="banner-img"
                  src={images.ExploreBGPettern}
                  alt="Hero1"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {/* Product Explore Slider Start */}

      {/* Info Blocks Start */}
      <div className="multi-info-block">
        <Container fluid="xxl">
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">
                    {landingPageProps.homePageData.content[5][0].title}
                  </h3>
                  <p className="description">
                    {landingPageProps.homePageData.content[5][0].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.DesignerNewCar}
                  >
                    {landingPageProps.homePageData.content[5][0].navigationLink}
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={`http:${landingPageProps.homePageData.content[5][0].imageFile.url}`}
                  width={
                    landingPageProps.homePageData.content[5][0].imageFile
                      .details.image.width
                  }
                  height={
                    landingPageProps.homePageData.content[5][0].imageFile
                      .details.image.height
                  }
                  alt="New Model"
                />
              </div>
            </div>
          </div>
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={`http:${landingPageProps.homePageData.content[5][1].imageFile.url}`}
                  width={
                    landingPageProps.homePageData.content[5][1].imageFile
                      .details.image.width
                  }
                  height={
                    landingPageProps.homePageData.content[5][1].imageFile
                      .details.image.height
                  }
                  alt="Timeless Martin"
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">
                    {landingPageProps.homePageData.content[5][1].title}
                  </h3>
                  <p className="description">
                    {landingPageProps.homePageData.content[5][1].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.DesignerNewCar}
                  >
                    {landingPageProps.homePageData.content[5][1].navigationLink}
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">
                    {landingPageProps.homePageData.content[5][2].title}
                  </h3>
                  <p className="description">
                    {landingPageProps.homePageData.content[5][2].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.DesignerNewCar}
                  >
                    {landingPageProps.homePageData.content[5][2].navigationLink}
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={`http:${landingPageProps.homePageData.content[5][2].imageFile.url}`}
                  width={
                    landingPageProps.homePageData.content[5][2].imageFile
                      .details.image.width
                  }
                  height={
                    landingPageProps.homePageData.content[5][2].imageFile
                      .details.image.height
                  }
                  alt="Parts and Accessories"
                />
              </div>
            </div>
          </div>
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={`http:${landingPageProps.homePageData.content[5][3].imageFile.url}`}
                  width={
                    landingPageProps.homePageData.content[5][3].imageFile
                      .details.image.width
                  }
                  height={
                    landingPageProps.homePageData.content[5][3].imageFile
                      .details.image.height
                  }
                  alt="Aston Martin Dealer"
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">
                    {landingPageProps.homePageData.content[5][3].title}
                  </h3>
                  <p className="description">
                    {landingPageProps.homePageData.content[5][3].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.DesignerNewCar}
                  >
                    {landingPageProps.homePageData.content[5][3].navigationLink}
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
      <AvailableLocation dealers={landingPageProps.dealers} />
      {/* Aston Martin Address End */}

      {/* Testimonial Start */}
      <Testimonials customerReview={landingPageProps.homePageData.content[6]} />
      {/* Testimonial End */}

      {/* News Start */}
      <News latestNews={landingPageProps.homePageData.content[7]} />
      {/* News End */}
    </>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps = async (context: any) => {
  const slug = context.resolvedUrl;
  const route = slug === "/" ? "home" : slug.slice(1);
  try {
    const res = await homePageService.getAllBranches();
    const homePageDataRes =
      await contentfulLandingPageService.getHomePageContent(route);
    const homePageData = homePageDataRes.data.item;

    console.log(homePageDataRes.data.item);
    return {
      props: { homePageData, dealers: res.item.dealers },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        homePageData: [],
      },
    };
  }
};

export default Home;
