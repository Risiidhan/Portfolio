import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Cards from './Cards'
import { useState, useEffect, useMemo } from 'react';

const Carousel = ({props}) => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        let resizeTimer;

        const updateSlidesPerView = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 1300)
                    setSlidesPerView(3);
                else if (window.innerWidth >= 768 && window.innerWidth < 1300)
                    setSlidesPerView(2);
                else
                    setSlidesPerView(1);
            }, 200); // Adjust debounce delay as needed
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const swiperConfig = useMemo(() => ({
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: slidesPerView,
        coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        pagination: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        initialSlide: 3,
        modules: [EffectCoverflow, Pagination, Autoplay],
        className: "mySwiper"
    }), [slidesPerView, props.length]);

    return (
         <Swiper {...swiperConfig}>
            {props.map((item, index) => (
                <SwiperSlide key={index}>
                    <Cards prop={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel