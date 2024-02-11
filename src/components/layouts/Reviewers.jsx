import React, { useState, useEffect } from 'react'
import Flex from './Flex'
import YellowStar from '../../assets/YellowStar.svg'
import WhiteStar from '../../assets/WhiteStar.svg'



const Reviewers = ({
    className,
    name,
    photo,
    review,
    ratingStar,
    dateTime
}) => {

    const [yellowStarCount, setYellowStarCount] = useState(0)
    const [whiteStarCount, setWhiteStarCount] = useState(0)

    useEffect(() => {
        if (ratingStar >= 0 && ratingStar <= 5) {
            setYellowStarCount(ratingStar)
            setWhiteStarCount(5 - ratingStar)
        }
        else {
            setYellowStarCount(0)
            setWhiteStarCount(0)
        }
    }, [])

    return (
        <div className={className}>
            <Flex>
                <img src={photo} alt="" className='w-[56px] h-[56px]'/>
                <div className='md:mr-4 pl-4'>
                    <p className='text-lg font-[500] text-[#383838] '>{name}</p>
                    <Flex className='gap-1 md:gap-4'>
                        <p className='text-sm md:text-lg font-[500] text-[#636363] flex items-center'>{ratingStar}.0</p>
                        <Flex className='mr-1'>
                            {
                                Array(yellowStarCount).fill(true).map((index) => (
                                    <img key={index} src={YellowStar} alt="" />
                                ))
                            }
                            {
                                Array(whiteStarCount).fill(true).map((index) => (
                                    <img key={index} src={WhiteStar} alt="" />
                                ))
                            }
                        </Flex>
                        <p className='text-sm md:text-lg flex justify-center items-center font-[400] text-[#A7A7A7]'>{dateTime}</p>
                    </Flex>
                </div>
            </Flex>
            <p className='text-lg font-[400] text-[#383838] mt-[27px]'>{review}</p>
        </div>
    )
}

export default Reviewers