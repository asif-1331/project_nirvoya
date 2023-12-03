import React from 'react'
import Img from '../layouts/Img'
import SliderPost1 from '../../assets/SliderPost1.jpg'
import SliderPost2 from '../../assets/SliderPost2.jpg'
import SliderPost3 from '../../assets/SliderPost3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const HomeSlider = () => {



    return (
        <>
            <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
                <SwiperSlide><Img src={SliderPost1}/></SwiperSlide>
                <SwiperSlide><Img src={SliderPost2} /></SwiperSlide>
                <SwiperSlide><Img src={SliderPost3} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeSlider