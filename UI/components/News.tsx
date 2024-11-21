import images from "@/public/images";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const News = () => {
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
                    <SwiperSlide className="news-card">
                        <Image className="banner" src={images.News1} alt="News" />
                        <p className="date">24 July 2023</p>
                        <h3 className="title">Top Features of Aston Martin&rsquo;s New DB12</h3>
                    </SwiperSlide>
                    <SwiperSlide className="news-card">
                        <Image className="banner" src={images.News2} alt="News" />
                        <p className="date">12 May 2023</p>
                        <h3 className="title">DBX707 AMR32 Edition: Celebrating Aston Martin&rsquo;s F1 success</h3>
                    </SwiperSlide>
                    <SwiperSlide className="news-card">
                        <Image className="banner" src={images.News3} alt="News" />
                        <p className="date">26 January 2023</p>
                        <h3 className="title">Aston Martin: 110 Years of Driving Excellence</h3>
                    </SwiperSlide>
                    <SwiperSlide className="news-card">
                        <Image className="banner" src={images.News1} alt="News" />
                        <p className="date">24 July 2023</p>
                        <h3 className="title">Top Features of Aston Martin&rsquo;s New DB12</h3>
                    </SwiperSlide>
                    <SwiperSlide className="news-card">
                        <Image className="banner" src={images.News2} alt="News" />
                        <p className="date">12 May 2023</p>
                        <h3 className="title">DBX707 AMR32 Edition: Celebrating Aston Martin&rsquo;s F1 success</h3>
                    </SwiperSlide>

                    <div className="custom-pagination-controller">
                        <Button className="btn-icon swiper-button-prev" variant="text">
                            <Image src={images.ArrowNarrowLeftDark} alt="Previous" />
                        </Button>
                        <div className="swiper-pagination">
                        </div>
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
    )
};

export default News;