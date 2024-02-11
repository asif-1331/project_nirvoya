import React from 'react'
import Flex from './Flex'
import ReviewForm from './ReviewForm'
import ReviewStarAverage from '../../assets/ReviewStarsAverage.svg'
import AvgRevBar from './AvgRevBar'
import Reviewers from './Reviewers'
// import { ProductReviewers } from '../../constants'
import Reviewer1 from '../../assets/reviewers/Reviewer1.png'
import Reviewer2 from '../../assets/reviewers/Reviewer2.png'
import Reviewer3 from '../../assets/reviewers/Reviewer3.png'
import Reviewer4 from '../../assets/reviewers/Reviewer4.png'


const ProductReviews = () => {

    return (
        <div className='w-[100%] bg-white'>
            <Flex className='lg:pl-12 px-6 pt-[40px] gap-[75px] flex-col lg:flex-row'>
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
                <a href="#" className='flex justify-start lg:justify-center lg:items-center'>
                    <button className='text-white text-sm font-[400] py-[10px] px-12 bg-secondary rounded-[3px]'>
                        Write a Review
                    </button>
                </a>
            </Flex>

            <p className='pl-[47px] pt-[35px] pb-[20px] text-[20px] font-[500] text-[#333333]'>Reviews (4)</p>

            <hr className='bg-[#E5E5E5] h-[1px]' />

            <div className="pt-[22px] lg:pl-12 px-6 flex flex-col gap-7">
                <Reviewers className='pb-[33px]' name="Vanille" photo={Reviewer1} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " ratingStar={5} dateTime="1 Month Ago"/>

                <Reviewers className='pb-[33px]' name="Maduin" photo={Reviewer2} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " ratingStar={5} dateTime="1 Month Ago"/>

                <Reviewers className='pb-[33px]' name="Samantha" photo={Reviewer3} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " ratingStar={5} dateTime="1 Month Ago"/>

                <Reviewers className='pb-[33px]' name="Roveria" photo={Reviewer4} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " ratingStar={5} dateTime="1 Month Ago"/>
            </div>


            <ReviewForm />

        </div>
    )
}

export default ProductReviews