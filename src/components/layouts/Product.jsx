import React, { useEffect, useState } from 'react'
import Img from './Img'
import Flex from './Flex'
import Basket from '../../assets/Basket.svg'
import notFavorite from '../../assets/Favorite.svg'
import Favorite from '../../assets/Favorite2.svg'
import YellowStar from '../../assets/YellowStar.svg'
import WhiteStar from '../../assets/WhiteStar.svg'

const Product = ({ title, photo, reviewStar, price, discount }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isLabeled, setIsLabeled] = useState(false)
    const [yellowStarCount, setYellowStarCount] = useState(0)
    const [whiteStarCount, setWhiteStarCount] = useState(0)

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    useEffect(() => {
        if (discount) {
            if (discount >= 0 && discount <= 100) {
                setIsLabeled(true)
            }
        }
        else {
            setIsLabeled(false)
        }

        if (reviewStar >= 0 && reviewStar <= 5) {
            setYellowStarCount(reviewStar)
            setWhiteStarCount(5 - reviewStar)
        }
        else {
            setYellowStarCount(0)
            setWhiteStarCount(0)
        }
    }, [])
    return (
        <a href="/product" className="block max-w-sm p-[14px] bg-white border border-gray-200 rounded-[10px]">
            <div className='relative rounded-[10px]'>
                {
                    isLabeled ?
                        <div className='text-white text-sm font-[600] py-[4.5px] px-[12.5px] absolute left-0 top-0 rounded-[2px] rounded-tl-[9px] bg-gradient-to-r from-[#FF7A00]/[24.9] to-[#FFB800]/[96.57] inline-block'>
                            -{discount}% OFF
                        </div> : ''
                }
                <Img src={photo} ImgClassName='rounded-[10px]'/>
                <div className='transition-all absolute right-[15px] top-[22px]' onClick={handleFavorite}>
                    {
                        isFavorite ? <img src={Favorite} alt="Favorite" /> : <img src={notFavorite} />
                    }
                </div>
            </div>
            <Flex className='pt-[15px]'>
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
                <p>(0)</p>
            </Flex>
            <p className=' text-lg font-[400] mb-[10px] mt-[10px] leading-[21px] text-[#383838]'>
                {title}
            </p>
            <Flex className='justify-between pr-[13px]'>
                <p className='text-[22px] font-[500] text-primary'>৳{price}</p>
                <img src={Basket} alt="Add to Cart" className='' />
            </Flex>
        </a>
        // <a className='bg-white p-[14px] rounded-[10px] inline-block cursor-pointer font-poppins'>
        //     <div className='relative rounded-[10px]'>
        //         {
        //             isLabeled ?
        //                 <div className='text-white text-sm font-[600] py-[4.5px] px-[12.5px] absolute left-0 top-0 rounded-[2px] rounded-tl-[9px] bg-gradient-to-r from-[#FF7A00]/[24.9] to-[#FFB800]/[96.57] inline-block'>
        //                     -{discount}% OFF
        //                 </div> : ''
        //         }
        //         <Img src={photo} />
        //         <div className='transition-all absolute right-[15px] top-[22px]' onClick={handleFavorite}>
        //             {
        //                 isFavorite ? <img src={Favorite} alt="Favorite" /> : <img src={notFavorite} />
        //             }
        //         </div>
        //     </div>
        //     <Flex className='pt-[15px]'>
        //         <Flex className='mr-1'>
        //             {
        //                 Array(yellowStarCount).fill(true).map((item, index) => (
        //                     <img key={index} src={YellowStar} alt="" />
        //                 ))
        //             }
        //             {
        //                 Array(whiteStarCount).fill(true).map((index) => (
        //                     <img key={index} src={WhiteStar} alt="" />
        //                 ))
        //             }
        //         </Flex>
        //         <p>(0)</p>
        //     </Flex>
        //     <p className=' text-lg font-[400] mb-[10px] mt-[10px] leading-[21px] text-[#383838]'>
        //         {title}
        //     </p>
        //     <Flex className='justify-between pr-[13px]'>
        //         <p className='text-[22px] font-[500] text-primary'>৳{price}</p>
        //         <img src={Basket} alt="Add to Cart" className='' />
        //     </Flex>
        // </a>
    )
}

export default Product