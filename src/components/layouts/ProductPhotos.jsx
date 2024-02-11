import React, { useState } from 'react'
import Flex from './Flex'
import Img from './Img'

import ProductPhoto1 from '../../assets/product_desc_photos/FlashSaleItem1.jpg'
import ProductPhoto2 from '../../assets/product_desc_photos/FlashSaleItem2.jpg'
import ProductPhoto3 from '../../assets/product_desc_photos/FlashSaleItem3.jpg'
import ProductPhoto4 from '../../assets/product_desc_photos/photo1.jpg'


import ArrowUp from '../../assets/arrowUp.svg'
import ArrowDown from '../../assets/DownArrow.svg'


import Link1 from '../../assets/social_links/linkedin.png'
import Link2 from '../../assets/social_links/Twitter.png'
import Link3 from '../../assets/social_links/facebook.png'
import Link4 from '../../assets/social_links/whatsapp.png'
import Link5 from '../../assets/social_links/otherLinks.png'



const ProductPhotos = () => {

  let [displayPhoto, setDisplayPhoto] = useState(0)
  let photos = [ProductPhoto4, ProductPhoto1, ProductPhoto2, ProductPhoto3]

  const handleClick = event => {
    setDisplayPhoto(event.target.getAttribute('data-photo-id'));
  }

  return (
    <div>

      <Flex className="gap-x-6 w-full mb-11">
        <Img src={photos[displayPhoto]} ImgClassName=" w-[35rem] lg:w-[550px] lg:h-[550px]" />
        <div className='w-[104px] overflow-scroll-y flex flex-col items-center justify-center' >

          <img src={ArrowUp} alt="" className=' mb-6' />
          <div className='overflow_scroll_y'>
            {
              photos.map((photo, index) => (
                <Img key={index} src={photo} ImgClassName='mb-3' photoID={index} onClick={handleClick} />
              ))
            }
          </div>
          <img src={ArrowDown} alt="" className='mt-3'/>
        </div>
      </Flex>

      <Flex className="font-poppins text-xl text-[#333333] gap-x-3 items-center">
        <p>Share</p>
        <div className='h-[44px] w-[44px] rounded-[100%] bg-[#5D9DB1]/[.15] flex justify-center items-center'>
          <Img src={Link1} />
        </div>
        <div className='h-[44px] w-[44px] rounded-[100%] bg-[#5D9DB1]/[.15] flex justify-center items-center'>
          <Img src={Link2} />
        </div>
        <div className='h-[44px] w-[44px] rounded-[100%] bg-[#5D9DB1]/[.15] flex justify-center items-center'>
          <Img src={Link3} />
        </div>
        <div className='h-[44px] w-[44px] rounded-[100%] bg-[#5D9DB1]/[.15] flex justify-center items-center'>
          <Img src={Link4} />
        </div>
        <div className='h-[44px] w-[44px] rounded-[100%] bg-[#5D9DB1]/[.15] flex justify-center items-center'>
          <Img src={Link5} />
        </div>
      </Flex>
    </div>
  )
}

export default ProductPhotos