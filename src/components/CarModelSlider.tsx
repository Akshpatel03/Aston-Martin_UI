import images from "@/public/images";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

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
            loop={true}
            speed={800}
            parallax
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={16}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{ 0: { spaceBetween: 16 }, 768: { spaceBetween: 32 } }}
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
                    <button className="btn size-lg btn-primary ">
                      Explore
                    </button>
                    <button className="btn size-lg btn-secondary ">
                      Enquire
                    </button>
                    <button className="size-lg btn btn-light">
                      Configure
                      <em className="ic right">
                        <Image src={images.ArrowNarrowRightSMPrimary} alt="" />
                      </em>
                    </button>
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
