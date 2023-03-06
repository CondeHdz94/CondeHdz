import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Styles
import '../Stylesheets/Components/SwiperCarousel.scss'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper'

export default function SwiperCarousel({ infoSwiperSlide }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                //navigation={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {infoSwiperSlide.map((item) => (
                    <SwiperSlide key={item.info}>
                        <div className="bg-none container__swiper-slider">
                            <div className="qualification-swiper-info-title bg-none">
                                <h2 className="bg-none">{item.year}</h2>
                                <div className="button-att bg-none">
                                    {item.title}
                                </div>
                            </div>
                            <small className="bg-none">{item.info}</small>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
