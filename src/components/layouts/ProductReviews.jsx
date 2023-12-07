import React from 'react'
import Flex from './Flex'
import ReviewForm from './ReviewForm'
import ReviewStarAverage from '../../assets/ReviewStarsAverage.svg'
import AvgRevBar from './AvgRevBar'
import Reviewers from './Reviewers'
import { ProductReviewers } from '../../constants'

const ProductReviews = () => {
    return (
        <div className='w-[100%] bg-white'>
            <Flex className='pl-[47px] pt-[40px] gap-[75px]'>
                <div className=''>
                    <p className='text-[20px] font-[500] text-[#3D3D3F] mb-[10px]'>Customer reviews</p>
                    <Flex className='gap-2'>
                        <img src={ReviewStarAverage} />
                        <p>4.6 out of 5</p>
                    </Flex>
                </div>
                <div className="">
                    <AvgRevBar />
                    <AvgRevBar />
                    <AvgRevBar />
                    <AvgRevBar />
                    <AvgRevBar />
                </div>
                <a href="#Review" className='flex self-center'>
                    <button className='text-white text-sm font-[400] py-[10px] px-12 bg-secondary rounded-[3px]'>
                        Write a Review
                    </button>
                </a>
            </Flex>

            <p className='pl-[47px] pt-[35px] pb-[20px] text-[20px] font-[500] text-[#333333]'>Reviews (4)</p>

            <hr className='bg-[#E5E5E5] h-[1px]' />

            <div className="pt-[22px] pl-[47px]">
                {/* <Reviewers className='pb-[33px]' name={ProductReviewers.name} photo={ProductReviewers.photo} review={ProductReviewers.review} ratingStar={ProductReviewers.ratingStar} dateTime={ProductReviewers.dateTime}/> */}

                {
                    
                }
            </div>

            <ReviewForm id='Review' />

        </div>
    )
}

export default ProductReviews