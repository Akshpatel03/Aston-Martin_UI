import images from "@/public/images";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
    return (
        <div className="testimonial-section block-spacing-x-80 block-spacing-y-64">
            <Container fluid className="pe-0">
                <h2 className="mb-32p am">What our <br className="d-sm-none" /> customers say</h2>
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
                    <SwiperSlide>
                        <p className="review">Absolutely fantastic experience with this dealership, Will was exceptional and made both my son and I feel welcomed and relaxed from the moment we walked in. Great customer service from a great brand!</p>
                        <p className="reviewer-detail">Andy F., 23/04/2023</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className="review">Buying this Aston Martin was a dream come true. I had a picture of one similar on my wish board for many months, and since my husband and I met it&rsquo;s been on our list for a life time must have!! The team at Reading made this experience even more special than I could have imagined.</p>
                        <p className="reviewer-detail">Susan G., 15/01/2023</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className="review">Cannot praise the whole team more highly! Fantastic service, great attention to detail, very friendly and approachable. There aren&rsquo;t too many places where you are always made to feel as though you are their most important customer.”</p>
                        <p className="reviewer-detail">Steve B., 29/11/2022</p>
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
            </Container>
        </div>
    )
};

export default Testimonials;