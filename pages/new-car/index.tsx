import React, { useEffect } from "react";
import AvailableLocation from "@/components/AvailableLocation";
import Testimonials from "@/components/Testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images from "@/public/images";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarModelSlider from "@/components/CarModelSlider";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";
// import ScrollspyNav from "react-scrollspy-nav";
import { Container } from "react-bootstrap";
import homePageService from "@/services/home-page-service";
import { IDealer } from "@/utils/interface/home";

import {
  CustomerReviews,
  HeadingandSubHeading,
  ModelInformation,
  PageContent,
  PageNavigation,
} from "@/utils/interface/landing-page";
import { GetServerSideProps } from "next";
import contentfulLandingPageService from "@/services/contentful-landingPage-service";

const DBXCarModel = {
  modelname: "DBX",
  modelImg: images.DBXModel,
  mode: "PoweR.Driven.",
  des: "A commanding and powerful SUV that drives like a sports car.",
  variant: [
    {
      name: "DBX707",
      modelImg: images.DBX707variant,
    },
    {
      name: "DBX",
      modelImg: images.DBXvariant,
    },
  ],
};
const VantageCarModel = {
  modelname: "Vantage",
  modelImg: images.VantageModel,
  mode: "Thrill.Driven.",
  des: "NGV. Redefining and reinventing what it means to be a tourer.",
  variant: [
    {
      name: "Vantage",
      modelImg: images.VantageVariant,
    },
  ],
};
const DB12CarModel = {
  modelname: "DB12",
  modelImg: images.DB12Model,
  mode: "Icon.Driven..",
  des: "The world’s first super tourer and a truly next generation sports car.",
  variant: [
    {
      name: "DB12",
      modelImg: images.DB12Variant,
    },
    {
      name: "DB12 Volante",
      modelImg: images.DB12VolanteVariant,
    },
  ],
};
const DBSCarModel = {
  modelname: "DBS",
  modelImg: images.DBSModel,
  mode: "Ferocity.Driven.",
  des: "A ‘brute in a suit’. Muscular, powerful and thrillingly potent to drive.",
  variant: [
    {
      name: "DBS 770 Ultimate",
      modelImg: images.DBS770Variant,
    },
    {
      name: "DBS 770 Ultimate Volante",
      modelImg: images.DBS770VolanteVariant,
    },
    {
      name: "DBS 770 Ultimate Volante",
      modelImg: images.DBS770VolanteVariant,
    },
    {
      name: "DBS 770 Ultimate Volante",
      modelImg: images.DBS770VolanteVariant,
    },
    {
      name: "DBS 770 Ultimate Volante",
      modelImg: images.DBS770VolanteVariant,
    },
  ],
};
const ValhallaCarModel = {
  modelname: "Valhalla",
  modelImg: images.ValhallaModel,
  mode: "Mystery.Driven.",
  des: "The first true production mid-engine sports car and Aston Martin’s first hybrid.",
  variant: [
    {
      name: "Valhalla",
      modelImg: images.ValhallaVariant,
    },
  ],
};
const ValkyrieCarModel = {
  modelname: "Valkyrie",
  modelImg: images.ValkyrieModel,
  mode: "Impossible.Driven.",
  des: "A Hypercar engineered to the impossible which takes F1 technology to the road.",
  variant: [
    {
      name: "Valkyrie Coupe",
      modelImg: images.ValkyrieVariant,
    },
    {
      name: "Valkyrie AMR Pro",
      modelImg: images.ValkyrieVariant,
    },
    {
      name: "Valkyrie Coupe",
      modelImg: images.ValkyrieVariant,
    },
    {
      name: "Valkyrie Coupe",
      modelImg: images.ValkyrieVariant,
    },
  ],
};

interface NewCarProps {
  dealers: IDealer[];
  newCarsBannerData: HeadingandSubHeading[];
  newCarsSubheadingData: ModelInformation[];
  newCarsTabBarData: ModelInformation[];
  newCarsModelsData: PageContent[];
  newCarsInfoBlockData: PageNavigation[];
  newCarsBuyingWithUsData: HeadingandSubHeading[];
  newCarsCustomerReviewData: CustomerReviews[];
}

const NewCar: React.FC<NewCarProps> = ({
  dealers,
  newCarsBannerData,
  newCarsSubheadingData,
  newCarsTabBarData,
  newCarsInfoBlockData,
  newCarsBuyingWithUsData,
  newCarsCustomerReviewData,
}) => {
  //JS srollspy Start---------------------------------------------------
  function ScrollspyClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    // Ensure target is not null
    if (target) {
      const sLink = document.querySelector(target);

      if (sLink instanceof HTMLElement) {
        // Now TypeScript knows `sLink` is an HTMLElement
        const sLinkOffset = sLink.offsetTop;
        window.scrollTo({ top: sLinkOffset - 100, behavior: "smooth" });
      } else {
        console.warn(
          `Element with selector ${target} is not an HTMLElement or not found.`
        );
      }
    }
  }
  useEffect(() => {
    // Add the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScrollActiveLink);
    }
    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", onScrollActiveLink);
      }
    };
  }, []);
  function onScrollActiveLink() {
    const winScrollTop = window.scrollY;
    const scrollspyContent = document.querySelectorAll(
      ".scrollspy-content .s-content"
    );
    for (let i = 0; i < scrollspyContent.length; i++) {
      const sectionId = scrollspyContent[i].getAttribute("id");
      const sectionOffset =
        (scrollspyContent[i] as HTMLElement).offsetTop - 100;
      const sectionHeight = (scrollspyContent[i] as HTMLElement).offsetHeight;
      // const link = document.querySelector('.scrollspy > li > a');
      if (
        winScrollTop >= sectionOffset &&
        winScrollTop < sectionOffset + sectionHeight
      ) {
        setTimeout(function () {
          document
            .querySelectorAll(".car-models-links .scrollspy > li > a")
            .forEach((e) => {
              e.classList.remove("is-active");
            });
          document
            .querySelector(
              '.car-models-links .scrollspy > li > a[href="#' + sectionId + '"]'
            )
            ?.classList.add("is-active");
        }, 100);
      }
    }
  }
  // JS srollspy End--------------------------------------------------

  return (
    <>
      {/* Hero Banner Start */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: `url(${newCarsBannerData[0].imageFile.url})`,
        }}
      >
        {/* <Image
          className="banner-img"
          src={images.Herobanner}
          alt="Herobanner"
        /> */}
        <p className="label">{newCarsBannerData[0].title}</p>
        <h1 className="title">{newCarsBannerData[0].description1}</h1>
        <p className="description mb-0">{newCarsBannerData[0].description2}</p>
      </div>
      {/* Hero Banner End */}

      {/*car info Start */}
      <div className="car-info-block">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3>{newCarsSubheadingData[0].title}</h3>
                <p className="subtitle1">
                  {newCarsSubheadingData[0].description}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="d-lg-block d-none">
                {newCarsSubheadingData[0].heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*car info End */}

      {/*car model tab Start */}
      <div className="car-models-wrapper">
        <div className="car-models-links px-md-4 px-3">
          <ul className="links container-xxl px-0 scrollspy">
            {newCarsTabBarData.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (model: ModelInformation, index: number) => {
                return (
                  <li key={index}>
                    <a
                      href={`#${model.title}`}
                      onClick={(e) => ScrollspyClick(e)}
                    >
                      {model.title}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="scrollspy-content car-models-content">
          <div className="s-content" id="DBX">
            <CarModelSlider {...DBXCarModel} />
          </div>
          <div className="s-content" id="VANTAGE">
            <CarModelSlider {...VantageCarModel} />
          </div>
          <div className="s-content" id="DB12">
            <CarModelSlider {...DB12CarModel} />
          </div>
          <div className="s-content" id="DBS">
            <CarModelSlider {...DBSCarModel} />
          </div>
          <div className="s-content" id="VALHALLA">
            <CarModelSlider {...ValhallaCarModel} />
          </div>
          <div className="s-content" id="VALKYRIE">
            <CarModelSlider {...ValkyrieCarModel} />
          </div>
        </div>
      </div>
      {/*car model tab  End */}

      {/* Info Blocks Start */}
      <div className="multi-info-block">
        <Container fluid="xxl">
          <div className="info-block">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">{newCarsInfoBlockData[0].title}</h3>
                  <p className="description">
                    {newCarsInfoBlockData[0].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.NewCar}
                  >
                    {newCarsInfoBlockData[0].navigationLink}
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <Image
                  className="banner"
                  src={`http:${newCarsInfoBlockData[0].imageFile.url}`}
                  width={newCarsInfoBlockData[0].imageFile.details.image.width}
                  height={
                    newCarsInfoBlockData[0].imageFile.details.image.height
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
                  src={`http:${newCarsInfoBlockData[1].imageFile.url}`}
                  width={newCarsInfoBlockData[1].imageFile.details.image.width}
                  height={
                    newCarsInfoBlockData[1].imageFile.details.image.height
                  }
                  alt="CustomiseMartinImg"
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="info">
                  <h3 className="title am">{newCarsInfoBlockData[1].title}</h3>
                  <p className="description">
                    {newCarsInfoBlockData[1].description}
                  </p>
                  <Link
                    className="quick-link color-primary"
                    href={ROUTES.NewCar}
                  >
                    {newCarsInfoBlockData[1].navigationLink}
                    <Image src={images.ArrowNarrowRightSMPrimary} alt="Next" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/*  */}

      {/* Info Section Start */}
      <div className="info-section black block-spacing-y-80">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3 className="title am">{newCarsBuyingWithUsData[0].title}</h3>
                <p className="description">
                  {newCarsBuyingWithUsData[0].description1}
                </p>
                <p className="description">
                  {newCarsBuyingWithUsData[0].description2}
                </p>
                <p className="description">
                  {newCarsBuyingWithUsData[0].description3}
                </p>
              </div>
            </div>
            <div className="col-lg-6 right-img-block">
              <Image
                className="right-side-image"
                src={`http:${newCarsBuyingWithUsData[0].imageFile.url}`}
                width={newCarsBuyingWithUsData[0].imageFile.details.image.width}
                height={
                  newCarsBuyingWithUsData[0].imageFile.details.image.height
                }
                alt="Aston Martin Dealer"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Info Section End */}

      {/* Aston Martin Address Start */}
      <AvailableLocation dealers={dealers} />
      {/* Aston Martin Address End */}

      {/* Testimonial Start */}
      <Testimonials customerReview={newCarsCustomerReviewData} />
      {/* Testimonial End */}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const currentRoute = context.resolvedUrl.slice(1);

  const res = await homePageService.getAllBranches();
  const newCarsPageRes = await contentfulLandingPageService.getHomePageContent(
    currentRoute
  );
  const newCarsPageData = newCarsPageRes.data.item;
  const newCarsBannerData = newCarsPageData.content[0];
  const newCarsSubheadingData = newCarsPageData.content[1];
  const newCarsTabBarData = newCarsPageData.content[2];
  const newCarsModelsData = newCarsPageData.content[3];
  const newCarsInfoBlockData = newCarsPageData.content[4];
  const newCarsBuyingWithUsData = newCarsPageData.content[5];
  const newCarsCustomerReviewData = newCarsPageData.content[6];
  return {
    props: {
      dealers: res.item.dealers,
      newCarsBannerData,
      newCarsSubheadingData,
      newCarsTabBarData,
      newCarsModelsData,
      newCarsInfoBlockData,
      newCarsBuyingWithUsData,
      newCarsCustomerReviewData,
    },
  };
};

export default NewCar;
