import React, { useState, useEffect } from 'react'
import Flex from './Flex'
import YellowStar from '../../assets/YellowStar.svg'
import WhiteStar from '../../assets/WhiteStar.svg'
import { ProductReviewers } from '../../constants'



const Reviewers = ({
    className,
    // name,
    // photo,
    // review,
    // ratingStar,
    // dateTime 
}) => {

    const [yellowStarCount, setYellowStarCount] = useState(0)
    const [whiteStarCount, setWhiteStarCount] = useState(0)

    useEffect(() => {
        if (ProductReviewers.ratingStar >= 0 && ProductReviewers.ratingStar <= 5) {
            setYellowStarCount(ProductReviewers.ratingStar)
            setWhiteStarCount(5 - ProductReviewers.ratingStar)
        }
        else {
            setYellowStarCount(0)
            setWhiteStarCount(0)
        }
    }, [])

    return (
        <div className={className}>
            <Flex>
                <img src={ProductReviewers.photo} alt="" />
                <div className='mr-4'>
                    <p className='text-lg font-[500] text-[#383838] '>{ProductReviewers.name}</p>
                    <Flex className='gap-4'>
                        <p className='text-lg font-[500] text-[#636363]'>{ProductReviewers.ratingStar}</p>
                        <Flex className='mr-1'>
                            {
                                Array(yellowStarCount).fill(true).map((item, index) => (
                                    <img key={index} src={YellowStar} alt="" />
                                ))
                            }
                            {
                                Array(whiteStarCount).fill(true).map((index) => (
                                    <img key={index} src={WhiteStar} alt="" />
                                ))
                            }
                        </Flex>
                        <p className='text-lg font-[400] text-[#A7A7A7]'>{ProductReviewers.dateTime}</p>
                    </Flex>
                </div>
            </Flex>
            <p className='text-lg font-[400] text-[#383838] mt-[27px]'>{ProductReviewers.review}</p>
        </div>
    )
}

export default Reviewers