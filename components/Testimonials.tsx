import images from "@/public/images";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CustomerReviews } from "@/utils/interface/landing-page";
interface testimonialProps {
  customerReview: CustomerReviews[];
}
const Testimonials = (customerReview: testimonialProps) => {
  return (
    <div className="testimonial-section block-spacing-x-80 block-spacing-y-64">
      <Container fluid className="pe-0">
        <h2 className="mb-32p am">
          What our <br className="d-sm-none" /> customers say
        </h2>
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
          className="default-slider testimonial-slider"
          breakpoints={{
            1400: {
              slidesPerView: 2.5,
              spaceBetween: 182,
            },
            991: {
              slidesPerView: 2.5,
              spaceBetween: 80,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            0: {
              slidesPerView: 1.35,
              spaceBetween: 32,
            },
          }}
        >
          {customerReview.customerReview.map((review, index) => (
            <SwiperSlide key={index}>
              <p className="review">{review.reviewMessage}</p>
              <p className="reviewer-detail">
                {review.authorName},{" "}
                {new Date(review.reviewDate).toLocaleDateString("en-US")}
              </p>
            </SwiperSlide>
          ))}

          <div className="custom-pagination-controller">
            <Button className="btn-icon swiper-button-prev" variant="text">
              <Image src={images.ArrowNarrowLeftWhite} alt="Previous" />
            </Button>
            <div className="swiper-pagination"></div>
            <Button className="btn-icon swiper-button-next" variant="Next">
              <Image src={images.ArrowNarrowRightWhite} alt="Next" />
            </Button>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
