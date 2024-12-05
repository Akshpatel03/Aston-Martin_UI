import React, { useEffect } from "react";
import AvailableLocation from "@/components/AvailableLocation";
import Testimonials from "@/components/Testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarModelSlider from "@/components/CarModelSlider";
// import ScrollspyNav from "react-scrollspy-nav";
import { Container } from "react-bootstrap";
import homePageService from "@/services/home-page-service";
import { IDealer } from "@/utils/interface/home";
import {
  ModelReviews,
  HeadingandSubHeading,
  ModelInformation,
  PageContent,
  PageNavigation,
} from "@/utils/interface/landing-page";
import { GetServerSideProps } from "next";
import contentfulService from "@/services/contentful-service";
import InfoBlock from "@/components/InfoBlock ";

interface NewCarProps {
  dealers: IDealer[];
  newCarsBannerData: HeadingandSubHeading;
  newCarsSubheadingData: ModelInformation;
  newCarsTabBarData: ModelInformation[];
  newCarsModelsData: PageContent[];
  newCarsInfoBlockData: PageNavigation[];
  newCarsBuyingWithUsData: HeadingandSubHeading;
  newCarsCustomerReviewData: ModelReviews[];
}
const NewCar: React.FC<NewCarProps> = ({
  dealers,
  newCarsBannerData,
  newCarsSubheadingData,
  newCarsTabBarData,
  newCarsInfoBlockData,
  newCarsBuyingWithUsData,
  newCarsCustomerReviewData,
  newCarsModelsData,
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
          backgroundImage: `url(${newCarsBannerData.imageFile.url})`,
        }}
      >
        {/* <Image
          className="banner-img"
          src={images.Herobanner}
          alt="Herobanner"
        /> */}
        <p className="label">{newCarsBannerData.title}</p>
        <h1 className="title">{newCarsBannerData.description1}</h1>
        <p className="description mb-0">{newCarsBannerData.description2}</p>
      </div>
      {/* Hero Banner End */}

      {/*car info Start */}
      <div className="car-info-block">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3>{newCarsSubheadingData.title}</h3>
                <p className="subtitle1">{newCarsSubheadingData.description}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="d-lg-block d-none">
                {newCarsSubheadingData.heading}
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
          {newCarsModelsData.map((model, index) => (
            <div
              key={index}
              className="s-content"
              id={newCarsTabBarData[index].title}
            >
              <CarModelSlider carModelSlider={model} />
            </div>
          ))}
        </div>
      </div>
      {/*car model tab  End */}

      {/* Info Blocks Start */}

      <div className="multi-info-block">
        <Container fluid="xxl">
          <InfoBlock newCarInfoBlock={newCarsInfoBlockData} />
        </Container>
      </div>
      {/*  */}

      {/* Info Section Start */}
      <div className="info-section black block-spacing-y-80">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3 className="title am">{newCarsBuyingWithUsData.title}</h3>
                <p className="description">
                  {newCarsBuyingWithUsData.description1}
                </p>
                <p className="description">
                  {newCarsBuyingWithUsData.description2}
                </p>
                <p className="description">
                  {newCarsBuyingWithUsData.description3}
                </p>
              </div>
            </div>
            <div className="col-lg-6 right-img-block">
              <Image
                className="right-side-image"
                src={`http:${newCarsBuyingWithUsData.imageFile.url}`}
                width={newCarsBuyingWithUsData.imageFile.details.image.width}
                height={newCarsBuyingWithUsData.imageFile.details.image.height}
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
  const newCarsPageRes = await contentfulService.getHomePageContent(
    currentRoute
  );
  const newCarsPageData = newCarsPageRes.data.item;
  const newCarsBannerData = newCarsPageData.content["New cars banner"][0];
  const newCarsSubheadingData =
    newCarsPageData.content["New cars sub heading"][0];
  const newCarsTabBarData = newCarsPageData.content["New cars tab-bar"];
  const newCarsModelsData = newCarsPageData.content["Car Models"];
  const newCarsInfoBlockData = newCarsPageData.content["New Cars Info Block"];
  const newCarsBuyingWithUsData = newCarsPageData.content["Buying with us"][0];
  const newCarsCustomerReviewData = newCarsPageData.content["Customer Reviews"];
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
