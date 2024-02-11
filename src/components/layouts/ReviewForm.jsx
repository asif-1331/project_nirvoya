import React from 'react'
import InputField from './InputField'
import Flex from './Flex'
import Img from './Img'
import BigYellowStar from '../../assets/BigYellowStar.svg'


const ReviewForm = ({ className }) => {

  let RatingStar = []

  return (
    <div className='px-6 md:px-12 mt-[70px] mb-[60px] font-poppins'>
      <p className=' font-semibold text-2xl text-[#383838] mb-4'>Add Your Review</p>
      <p className='font-regular text-lg text-[#A7A7A7] mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

      <InputField name="Name *" titleClassName="text-base" />
      <InputField name="Email *" titleClassName="text-base" />
      <InputField name="Review *" textArea={true} rows={5} titleClassName="text-base" />

      <Flex className="gap-x-4 mb-10">
        <p className='font-medium text-lg'>Rating</p>
        <Flex>


          <Img src={BigYellowStar}/>
          <Img src={BigYellowStar}/>
          <Img src={BigYellowStar}/>
          <Img src={BigYellowStar}/>
          <Img src={BigYellowStar}/>
           

        </Flex>
      </Flex>

      <a href="#" className='inline-block py-4 px-14 bg-[#0198E9] rounded-[8px] text-white mb-[60px]'>
        Submit
      </a>
    </div>
  )
}

export default ReviewForm