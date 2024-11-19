import images from "@/public/images";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
    return (
        <div className="testimonials block-spacing-80 block-64">
            <h2 className="mb-32p am">What our customers say</h2>
            <Swiper
                modules={[Navigation, Pagination, Parallax]}
                speed={800}
                parallax
                slidesPerView={2.5}
                spaceBetween={182}
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
                <SwiperSlide>
                    <p className="review">Absolutely fantastic experience with this dealership, Will was exceptional and made both my son and I feel welcomed and relaxed from the moment we walked in. Great customer service from a great brand!</p>
                    <p className="reviewer-detail">Andy F., 23/04/2023</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="review">Absolutely fantastic experience with this dealership, Will was exceptional and made both my son and I feel welcomed and relaxed from the moment we walked in. Great customer service from a great brand!</p>
                    <p className="reviewer-detail">Andy F., 23/04/2023</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="review">Absolutely fantastic experience with this dealership, Will was exceptional and made both my son and I feel welcomed and relaxed from the moment we walked in. Great customer service from a great brand!</p>
                    <p className="reviewer-detail">Andy F., 23/04/2023</p>
                </SwiperSlide>
                <div className="custom-pagination-controller">
                    <Button className="btn-icon swiper-button-prev" variant="text">
                        <Image src={images.ArrowNarrowLeftWhite} alt="Previous" />
                    </Button>
                    <div className="swiper-pagination">
                    </div>
                    <Button className="btn-icon swiper-button-next" variant="Next">
                        <Image src={images.ArrowNarrowRightWhite} alt="Next" />
                    </Button>
                </div>
            </Swiper>
        </div>
    )
};

export default Testimonials;