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
import Herobanner from "@/public/images/new-car/hero-img.jpg";
import { Container } from "react-bootstrap";

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

const DesignerNewCar = () => {
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
        console.log(sectionId);
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
        style={{ backgroundImage: `url(${Herobanner.src})` }}
      >
        {/* <Image
          className="banner-img"
          src={images.Herobanner}
          alt="Herobanner"
        /> */}
        <p className="label">New cars</p>
        <h1 className="title">Explore the Aston Martin range</h1>
        <p className="description mb-0">
          Where ultra luxury meets British engineering mastery. Discover our
          range of new Aston Martin vehicles.
        </p>
      </div>
      {/* Hero Banner End */}

      {/*car info Start */}
      <div className="car-info-block">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3>Intensely powerful, rare and addictive.</h3>
                <p className="subtitle1">
                  From muscular hypercars with enough downforce to drive on the
                  ceiling, to commanding SUVs which perform like sports cars,
                  Aston Martin vehicles stand at the forefront of automotive
                  engineering and deliver unrivalled driving experiences which
                  supercharge the senses. Explore our range of models below,
                  book a test drive with us or customise the car of your dreams
                  today.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="d-lg-block d-none">ASTON MARTIN MODEL RANGE</h1>
            </div>
          </div>
        </div>
      </div>
      {/*car info End */}

      {/*car model tab Start */}
      <div className="car-models-wrapper">
        <div className="car-models-links px-md-4 px-3">
          <ul className="links container-xxl px-0 scrollspy">
            <li>
              <a href="#DBX" onClick={(e) => ScrollspyClick(e)}>
                DBX
              </a>
            </li>
            <li>
              <a href="#Vantage" onClick={(e) => ScrollspyClick(e)}>
                Vantage
              </a>
            </li>
            <li>
              <a href="#DB12" onClick={(e) => ScrollspyClick(e)}>
                DB12
              </a>
            </li>
            <li>
              <a href="#DBS" onClick={(e) => ScrollspyClick(e)}>
                DBS
              </a>
            </li>
            <li>
              <a href="#ValHalla" onClick={(e) => ScrollspyClick(e)}>
                ValHalla
              </a>
            </li>
            <li>
              <a href="#Valkyrie" onClick={(e) => ScrollspyClick(e)}>
                Valkyrie
              </a>
            </li>
          </ul>
        </div>
        <div className="scrollspy-content car-models-content">
          <div className="s-content" id="DBX">
            <CarModelSlider {...DBXCarModel} />
          </div>
          <div className="s-content" id="Vantage">
            <CarModelSlider {...VantageCarModel} />
          </div>
          <div className="s-content" id="DB12">
            <CarModelSlider {...DB12CarModel} />
          </div>
          <div className="s-content" id="DBS">
            <CarModelSlider {...DBSCarModel} />
          </div>
          <div className="s-content" id="ValHalla">
            <CarModelSlider {...ValhallaCarModel} />
          </div>
          <div className="s-content" id="Valkyrie">
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

      {/* Info Section Start */}
      <div className="info-section black block-spacing-y-80">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <h3 className="title am">Buying with us</h3>
                <p className="description">
                  Having represented Aston Martin for over 65 years, we know
                  that buying a new model is an experience to be enjoyed and
                  savoured.
                </p>
                <p className="description">
                  Our state-of-the-art dealerships stock the complete range of
                  new Aston Martin models to view, test drive and buy.
                </p>
                <p className="description">
                  Whether it&rsquo;s deciding between V8 or V12 or a coupé or
                  convertible, our experts have exhaustive knowledge of each
                  vehicle&rsquo;s capabilities and can advise on servicing,
                  financing and bespoke personalisation too.
                </p>
              </div>
            </div>
            <div className="col-lg-6 right-img-block">
              <Image
                className="right-side-image"
                src={images.BuyWithusImg}
                alt="Aston Martin Dealer"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Info Section End */}

      {/* Aston Martin Address Start */}
      <AvailableLocation dealers={[]} />
      {/* Aston Martin Address End */}

      {/* Testimonial Start */}
      <Testimonials />
      {/* Testimonial End */}
    </>
  );
};
export default DesignerNewCar;
