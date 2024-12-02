import images from "@/public/images";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/routes";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarModelSliderProps {
  modelImg: string;
  modelname: string;
  mode: string;
  des: string;
  variant: Variant[];
}

interface Variant {
  name: string;
  modelImg: string;
}

const CarModelSlider: React.FC<CarModelSliderProps> = ({
  modelImg,
  modelname,
  des,
  variant,
  mode,
}) => {
  const navigate = useRouter();

  return (
    <div className="car-models-block">
      <div className="container-xxl">
        <div className="left-car-models-block">
          <p className="label">{mode}</p>
          <h1 className="title">{modelname}</h1>
          <Image className="model-img" src={modelImg} alt="DBXModel" />
          <p className="description mb-0">{des}</p>
        </div>
        <div className="right-car-models-block">
          <Swiper
            modules={[Navigation, Pagination, Parallax]}
            speed={800}
            parallax
            freeMode={true}
            slidesPerView="auto"
            breakpoints={{ 0: { spaceBetween: 16 }, 768: { spaceBetween: 32 } }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            className="default-slider testimonial"
          >
            {variant.map((row, index) => (
              <SwiperSlide
                key={index}
                className={`${variant.length == 1 ? "one" : ""}`}
              >
                <div
                  className={`car-variant-card ${
                    variant.length == 1 ? "one" : ""
                  }`}
                >
                  <h3>{row.name}</h3>
                  <em className="thumb">
                    <Image
                      className="model-img"
                      src={row.modelImg}
                      alt="DBXvariant"
                    />
                  </em>
                  <div className="action">
                    <Button
                      className="size-lg"
                      variant="primary"
                      onClick={() => navigate.push(ROUTES.Explore)}
                    >
                      Explore
                    </Button>
                    <Button className="size-lg" variant="secondary">
                      Enquire
                    </Button>
                    <Button className="size-lg" variant="light">
                      Configure
                      <em className="ic right">
                        <Image src={images.ArrowNarrowRightSMPrimary} alt="" />
                      </em>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination-controller">
              <Button className="btn-icon swiper-button-prev" variant="text">
                <Image src={images.ArrowNarrowLeftDark} alt="Previous" />
              </Button>
              <div className="swiper-pagination"></div>
              <Button className="btn-icon swiper-button-next" variant="Next">
                <Image src={images.ArrowNarrowRightDark} alt="Next" />
              </Button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarModelSlider;
