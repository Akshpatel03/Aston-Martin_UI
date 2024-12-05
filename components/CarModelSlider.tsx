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
import { PageContent } from "@/utils/interface/landing-page";
import { IEnquiryData } from "@/utils/interface";

interface CarModelSliderProps {
  carModelSlider: PageContent;
  setEquireDrawer: (value: React.SetStateAction<boolean>) => void;
  setEnquireData: React.Dispatch<
    React.SetStateAction<IEnquiryData | undefined>
  >;
}
const CarModelSlider: React.FC<CarModelSliderProps> = ({
  carModelSlider,
  setEquireDrawer,
  setEnquireData,
}) => {
  const navigate = useRouter();
  return (
    <div className="car-models-block">
      <div className="container-xxl">
        <div className="left-car-models-block">
          <p className="label">{carModelSlider.tag}</p>
          <h1 className="title">{carModelSlider.title}</h1>
          <Image
            className="model-img"
            src={`http:${carModelSlider.imageFile.url}`}
            width={carModelSlider.imageFile.details.image.width}
            height={carModelSlider.imageFile.details.image.height}
            alt={carModelSlider.imageFile.fileName}
          />
          <p className="description mb-0">{carModelSlider.description}</p>
        </div>

        <div className="right-car-models-block">
          <Swiper
            modules={[Navigation, Pagination, Parallax]}
            speed={800}
            parallax
            freeMode={true}
            slidesPerView="auto"
            breakpoints={{
              0: { spaceBetween: 16 },
              768: { spaceBetween: 32 },
            }}
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
            {carModelSlider.content.map((row, index) => (
              <SwiperSlide
                key={index}
                className={`${carModelSlider.content.length == 1 ? "one" : ""}`}
              >
                <div
                  className={`car-variant-card ${
                    carModelSlider.content.length == 1 ? "one" : ""
                  }`}
                >
                  <h3>{row.title}</h3>
                  <em className="thumb">
                    <Image
                      className="model-img"
                      src={`http:${row.imageFile.url}`}
                      width={row.imageFile.details.image.width}
                      height={row.imageFile.details.image.height}
                      alt={row.imageFile.fileName}
                    />
                  </em>
                  <div className="action">
                    <Button
                      className="size-lg"
                      variant="primary"
                      onClick={() =>
                        row.explorePageRoute &&
                        navigate.push(
                          `${ROUTES.Explore}/${row.explorePageRoute}`
                        )
                      }
                    >
                      Explore
                    </Button>
                    <Button
                      onClick={() => {
                        setEquireDrawer(true);
                        setEnquireData({
                          tag: carModelSlider.tag,
                          modelName: row.title,
                        });
                      }}
                      className="size-lg"
                      variant="secondary"
                    >
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
