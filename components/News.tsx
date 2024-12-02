import images from "@/public/images";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LatestNews } from "@/utils/interface/landing-page";
interface latestNewsProps {
  latestNews: LatestNews[];
}
const News = (latestNews: latestNewsProps) => {
  return (
    <div className="news-section block-spacing-x-80 block-spacing-y-64">
      <Container fluid className="pe-0">
        <div className="section-header">
          <h2 className="am">Read our latest news</h2>
          <Button className="size-lg d-sm-flex d-none" variant="primary">
            View all news
          </Button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Parallax]}
          speed={800}
          parallax
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 2.6,
              spaceBetween: 32,
            },
            991: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            0: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
          }}
          className="default-slider news-slider"
        >
          {latestNews.latestNews.map((news, index) => (
            <SwiperSlide className="news-card" key={index}>
              <Image
                className="banner"
                src={`http:${news.imageFile.url}`}
                width={news.imageFile.details.image.width}
                height={news.imageFile.details.image.height}
                alt="News"
              />
              <p className="date">{news.newsDate}</p>
              <h3 className="title">{news.newsHeading}</h3>
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
      </Container>
      <div className="m-16p mb-0">
        <Button className="size-lg w-100 d-sm-none d-flex" variant="primary">
          View all news
        </Button>
      </div>
    </div>
  );
};

export default News;
