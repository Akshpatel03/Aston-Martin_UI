import images from "@/public/images";
import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";
import Select, { SingleValue } from "react-select";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";
import AvailableLocation from "@/components/AvailableLocation";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DesignerHome = () => {
  const navigate = useRouter();
  const options = [
    { value: "option1", label: "Model" },
    { value: "option2", label: "Engine" },
    { value: "option3", label: "Wheel" },
  ];
  // Include `null` in the state type
  const [selectedOption, setSelectedOption] = React.useState<{ value: string; label: string } | null>(
    options[0]
  );

  // Define the handler type explicitly
  const handleChange = (option: SingleValue<{ value: string; label: string }>) => {
    setSelectedOption(option); // `option` can be `null`
  };

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
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        navigation
        className="hero-banner-slider default-slider"
      >
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">Power. Driven.</p>
          <h1 className="title" data-swiper-parallax="-400">Aston Martin DBX707</h1>
          <p className="description" data-swiper-parallax="-500">The most powerful luxury SUV</p>
          <div className="w-sm-auto w-100" data-swiper-parallax="-600">
            <Button className="size-lg w-sm-auto w-100" variant="light" onClick={() => navigate.push(ROUTES.DesignerExploreModel)}>
              Explore
            </Button>
          </div>
          <Image className="banner-img" src={images.Hero1} alt="Hero1" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">Power. Driven.</p>
          <h1 className="title" data-swiper-parallax="-400">Aston Martin DBX707</h1>
          <p className="description" data-swiper-parallax="-500">The most powerful luxury SUV</p>
          <div className="w-sm-auto w-100" data-swiper-parallax="-600">
            <Button className="size-lg w-sm-auto w-100" variant="light" onClick={() => navigate.push(ROUTES.DesignerExploreModel)}>
              Explore
            </Button>
          </div>
          <Image className="banner-img" src={images.Hero1} alt="Hero1" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="label" data-swiper-parallax="-300">Power. Driven.</p>
          <h1 className="title" data-swiper-parallax="-400">Aston Martin DBX707</h1>
          <p className="description" data-swiper-parallax="-500">The most powerful luxury SUV</p>
          <div className="w-sm-auto w-100" data-swiper-parallax="-600">
            <Button className="size-lg w-sm-auto w-100" variant="light" onClick={() => navigate.push(ROUTES.DesignerExploreModel)}>
              Explore
            </Button>
          </div>
          <Image className="banner-img" src={images.Hero1} alt="Hero1" />
        </SwiperSlide>
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
                  <Select className="react-custom-select dark" options={options} value={selectedOption} onChange={handleChange} isSearchable={false} />
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
            <div className="col-xxl-3 col-md-6">
              <div className="quick-link-card">
                <h4 className="am">New cars</h4>
                <Image src={images.NewCar} alt="New Car" />
                <Link className="quick-link" href={ROUTES.DesignerNewCar}>
                  Discover the new Aston Martin range
                  <Image src={images.ArrowNarrowRightSMWhite} alt="Next" />
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="quick-link-card">
                <h4 className="am">Pre-owned Aston Martin</h4>
                <Image src={images.PreOwnedAstonMartin} alt="Pre-owned Aston Martin" />
                <Link className="quick-link" href={ROUTES.DesignerPreOwned}>
                  Browse pre-owned Aston Martin cars
                  <Image src={images.ArrowNarrowRightSMWhite} alt="Next" />
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="quick-link-card">
                <h4 className="am">Book a service</h4>
                <Image src={images.BookService} alt="Book a service" />
                <Link className="quick-link" href={ROUTES.DesignerBookService}>
                  Book your next service online
                  <Image src={images.ArrowNarrowRightSMWhite} alt="Next" />
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="quick-link-card">
                <h4 className="am">Value my Aston Martin</h4>
                <Image src={images.ValueMyAstonMartin} alt="Value my Aston Martin" />
                <Link className="quick-link" href={ROUTES.DesignerValueMyAstonMartin}>
                  Arrange a valuation with us
                  <Image src={images.ArrowNarrowRightSMWhite} alt="Next" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div >
      {/* Quick Redirects End */}

      {/* Info Section Start */}
      <div className="info-section black block-spacing-y-80">
        <Container fluid="xxl">
          <div className="row align-items-center">
            <div className="col-xl-6 ps-xxxl-0">
              <Image className="left-image" src={images.AstonMartinDealer} alt="Aston Martin Dealer" />
            </div>
            <div className="col-xl-6">
              <div className="info">
                <h3 className="title am">Welcome to Dealer X Aston Martin</h3>
                <p className="description">As one of the UK&rsquo;s leading luxury car dealerships, we take pride in our outstanding levels of customer service and unrivalled automotive expertise.</p>
                <p className="description">We operate state-of-the art Aston Martin showrooms in both Reading and Cheltenham and offer a wide range of iconic Aston Martin models to buy both new and pre-owned as well as personalised aftersales and repair services.</p>
              </div>
            </div>
          </div>
        </Container>
      </div >
      {/* Info Section End */}

      {/* Info Points Start */}
      <div className="block-spacing-y-64 block-spacing-y-64 overflow-hidden">
        <Container fluid="xxl">
          <h2 className="mb-32p am">Why Dealer X?</h2>
          <div className="row info-points-wrapper">
            <div className="col-xxl-3 col-md-6 info-points">
              <h4>65 years of proud motoring heritage</h4>
            </div>
            <div className="col-xxl-3 col-md-6 info-points">
              <h4>94% on all customer reviews collected by Reputation</h4>
            </div>
            <div className="col-xxl-3 col-md-6 info-points">
              <h4>Fully certified technicians and engineers</h4>
            </div>
            <div className="col-xxl-3 col-md-6 info-points">
              <h4>First class personalised customer care</h4>
            </div>
          </div>
        </Container>
      </div >
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
          <SwiperSlide>
            <Image className="model-crop" src={images.DBX707Green} alt="model" />
            <div className="slider-handler">
              <div className="header">
                <Button className="btn-icon swiper-button-prev" variant="text" onClick={handleExplorePrev}>
                  <Image src={images.ArrowNarrowLeftLongTailWhite} alt="Previous" />
                </Button>
                <div className="header-info">
                  <p className="label" data-swiper-parallax="-200">POWER. DRIVEN.</p>
                  <h1 className="title" data-swiper-parallax="-300">DBX707</h1>
                </div>
                <Button className="btn-icon swiper-button-next" variant="text" onClick={handleExploreNext}>
                  <Image src={images.ArrowNarrowRightLongTailWhite} alt="Next" />
                </Button>
              </div>
              <p className="description" data-swiper-parallax="-400">The most powerful luxury SUV</p>
              <div className="action" data-swiper-parallax="-500">
                <Button className="size-lg" variant="light" onClick={() => navigate.push(ROUTES.DesignerNewCar)}>
                  New
                </Button>
                <Button className="size-lg" variant="primary" >
                  Pre-owned
                </Button>
              </div>
            </div>
            <Image className="banner-img" src={images.ExploreProductDBX707GreenBG} alt="Hero1" />
            <Image className="banner-img" src={images.ExploreBGPettern} alt="Hero1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="model-crop" src={images.DBX707Green} alt="model" />
            <div className="slider-handler">
              <div className="header">
                <Button className="btn-icon swiper-button-prev" variant="text" onClick={handleExplorePrev}>
                  <Image src={images.ArrowNarrowLeftLongTailWhite} alt="Previous" />
                </Button>
                <div className="header-info">
                  <p className="label" data-swiper-parallax="-200">POWER. DRIVEN.</p>
                  <h1 className="title" data-swiper-parallax="-300">DBX707</h1>
                </div>
                <Button className="btn-icon swiper-button-next" variant="text" onClick={handleExploreNext}>
                  <Image src={images.ArrowNarrowRightLongTailWhite} alt="Next" />
                </Button>
              </div>
              <p className="description" data-swiper-parallax="-400">The most powerful luxury SUV</p>
              <div className="action" data-swiper-parallax="-500">
                <Button className="size-lg" variant="light" >
                  New
                </Button>
                <Button className="size-lg" variant="primary" >
                  Pre-owned
                </Button>
              </div>
            </div>
            <Image className="banner-img" src={images.ExploreProductDBX707GreenBG} alt="Hero1" />
            <Image className="banner-img" src={images.ExploreBGPettern} alt="Hero1" />
          </SwiperSlide>
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
                  <h3 className="title am">New Aston Martin models</h3>
                  <p className="description">Our stunning state-of-the-art dealership stocks a complete range of Aston Martin models to view, test drive and buy.</p>
                  <Link className="quick-link color-primary" href={ROUTES.DesignerNewCar}>
                    Discover the new Aston Martin range
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image className="banner" src={images.NewMartinModel} alt="New Model" />
              </div>
            </div>
          </div >
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <Image className="banner" src={images.TimelessMartinCars} alt="Timeless Martin" />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">Timeless Aston Martin cars</h3>
                  <p className="description">Find a timeless certified pre-owned Aston Martin which meets your needs and budget with our team of experts.</p>
                  <Link className="quick-link color-primary" href={ROUTES.DesignerNewCar}>
                    Browse Timeless
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
            </div>
          </div >
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">Parts & accessories</h3>
                  <p className="description">We are an authorised dealer of Aston Martin parts and have an abundant supply of components and accessories ready to be fitted by accredited technicians.</p>
                  <Link className="quick-link color-primary" href={ROUTES.DesignerNewCar}>
                    Explore
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image className="banner" src={images.PartsAccessories} alt="Parts and Accessories" />
              </div>
            </div>
          </div >
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <Image className="banner" src={images.ValueMyMartin} alt="Aston Martin Dealer" />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">Value my Aston Martin</h3>
                  <p className="description">If you&rsquo;re looking for an instant valuation or to part exchange, find out how we can help sell your vehicle and get the very best value possible.</p>
                  <Link className="quick-link color-primary" href={ROUTES.DesignerNewCar}>
                    Let it go and start over
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

      {/* Testimonial Start */}
      <Testimonials />
      {/* Testimonial End */}

      {/* News Start */}
      <News />
      {/* News End */}
    </>
  );
};
export default DesignerHome;
