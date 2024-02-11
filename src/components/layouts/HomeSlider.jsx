import React, { useState } from 'react'
import Img from '../layouts/Img'
import SliderPost1 from '../../assets/SliderPost1.jpg'
import SliderPost2 from '../../assets/SliderPost2.jpg'
import SliderPost3 from '../../assets/SliderPost3.jpg'

import LeftArrow from '../../assets/LeftArrow.svg'
import RightArrow from '../../assets/RightArrow.svg'
import Flex from './Flex'


const HomeSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = [SliderPost1, SliderPost2, SliderPost3]

    const styles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex]})`,
    }

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "5%",
        width: "2rem",
        color: "#0198E9",
        zIndex: 1,
        cursor: "pointer",
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "5%",
        width: "2rem",
        color: "#0198E9",
        zIndex: 1,
        cursor: "pointer",
    };

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const handleSlide = event => {
        setCurrentIndex(event.target.getAttribute('data-slider-id'))
    }


    return (
        <>
            <div className='w-full h-[13rem] sm:h-[26rem] lg:h-[35rem] relative'>
                <img style={leftArrowStyles} src={LeftArrow} onClick={goToPrev} />
                <img style={rightArrowStyles} src={RightArrow} onClick={goToNext} />
                <div style={styles} className='transition rounded-xl'></div>
                <div className='flex gap-x-2 justify-center items-center absolute top-[90%] left-[50%] translate-x-[-50%] cursor-pointer'>
                    {
                        slides.map((index) => (
                            <div key={index} data-slider-id={index} 
                            // onClick={handleSlide} 
                            className='w-[10px] h-[10px] rounded-full bg-[#0198E9]'></div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default HomeSlider