import React, { useState, useEffect } from 'react'
import Flex from './Flex'
import Img from './Img'
import YellowStar from '../../assets/YellowStar.svg'
import WhiteStar from '../../assets/WhiteStar.svg'
import notWishlisted from '../../assets/notWishlisted.svg'
import Favorite from '../../assets/Favorite2.svg'
import Check from '../../assets/Check.svg'
import Check_fill from '../../assets/Check_fill.svg'

const ProductInfo = ({ discountTrue, discountPercent }) => {


  const [yellowStarCount, setYellowStarCount] = useState(0)
  let [quantityCount, setQuantityCount] = useState(0)
  const [whiteStarCount, setWhiteStarCount] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleQuanAdd = () => {
    setQuantityCount(quantityCount = quantityCount + 1)
  }

  const handleQuanLess = () => {
    setQuantityCount(quantityCount = quantityCount - 1)
  }

  let ratingStar = 4

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
    <div className='text-[#333333] font-poppins'>

      <p className='text-[26px] font-[500] mb-4 w-full lg:w-[610px]'>
        Super Skinny Rib Trouser & Joggers for Men By
        Sowdagar Trouser
      </p>

      <Flex className="gap-x-4 items-center mb-8">

        <Flex className="items-center gap-x-1  md:gap-x-2 lg:gap-x-1 flex-col md:flex-row">
          <p className='text-base font-medium'>4.0</p>
          <Flex>
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
          <p className='text-base text-[#BABABA]'>(223)</p>
        </Flex>

        <div className='w-[2px] h-[31px] bg-[#F2F2F2]'></div>

        <Flex className="items-center gap-x-4">
          <Img src={Check} />
          <p><span>4,320</span> Sold</p>
        </Flex>

        <div className='w-[2px] h-[31px] bg-[#F2F2F2]'></div>

        <Flex className="items-center gap-x-4">
          <div onClick={handleFavorite}>
            {
              isFavorite ? <img src={Favorite} alt="wishlist" /> : <img src={notWishlisted} />
            }
          </div>
          <p className='flex items-center justify-center'>Add to wishlist</p>
        </Flex>

      </Flex>

      <Flex className="items-center mb-3">
        <p className='font-semibold text-4xl text-[#0198E9] mr-6'>$976.33</p>
        <p className='font-regular text-[20px] text-[#8D8D8D] mr-4'>$1,020.99</p>
        {
          discountTrue ? <p className='font-semiBold text-sm py-1 px-2 bg-gradient-to-r from-[#FF7A00]/[24.9] to-[#FFB800]/[96.57]'>20%</p> : ''
        }
        <p className='font-semibold text-sm py-1 px-2 bg-gradient-to-r from-[#FF7A00]/[24.9] to-[#FFB800]/[96.57] rounded-[2px] text-white'>20%</p>
      </Flex>

      <Flex className="gap-x-5 mb-5">
        <Flex>
          <span className='text-[#3D3D3F] text-base font-medium'>SKU:  </span>
          <p className='text-[#757575] text-base font-normal'> 12314124124</p>
        </Flex>

        <Flex className="gap-x-1 items-center justify-center">
          <Img src={Check_fill} />
          <p className='flex justify-center items-center'>In Stock</p>
        </Flex>
      </Flex>

      <hr className='mb-3' />

      <p className='w-full lg:w-[598px] mb-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>

      <ul className='mb-8 list-disc ml-5'>
        <li>Direct Full Array </li>
        <li>Quantum Dot Technology </li>
        <li>Ambient Mode</li>
        <li>One Remote Control</li>
      </ul>

      <Flex className="gap-x-4 mb-8">
        <p className='text-[19px]'>Size</p>

        <Flex className="gap-x-4">
          <button type="button" className="rounded-[2px] bg-white hover:bg-[#0198E9] hover:text-white font-medium text-[14px] px-[11px] py-1  focus:outline-none ">S</button>
          <button type="button" className="rounded-[2px] bg-white hover:bg-[#0198E9] hover:text-white font-medium text-[14px] px-[11px] py-1  focus:outline-none ">M</button>
          <button type="button" className="rounded-[2px] bg-white hover:bg-[#0198E9] hover:text-white font-medium text-[14px] px-[11px] py-1  focus:outline-none ">L</button>
          <button type="button" className="rounded-[2px] bg-white hover:bg-[#0198E9] hover:text-white font-medium text-[14px] px-[11px] py-1  focus:outline-none ">XL</button>
          <button type="button" className="rounded-[2px] bg-white hover:bg-[#0198E9] hover:text-white font-medium text-[14px] px-[11px] py-1  focus:outline-none ">XXL</button>
        </Flex>
      </Flex>

      <Flex className="items-center md:flex-row flex-col gap-y-5">
        <p className='text-sm'>Quantity:</p>

        <Flex className="md:mr-[35px] md:ml-4 items-center gap-x-3 border-[2px] border-[#EAEAEA] rounded-[5px]">
          <span onClick={decrease} className='py-[6px] px-[9px] flex justify-center items-center bg-[#EFEFEF] hover:bg-[#EAEAEA] cursor-pointer'>-</span>
          <p>{counter}</p>
          <span onClick={increase} className='py-[6px] px-[9px] flex justify-center items-center bg-[#EFEFEF] hover:bg-[#EAEAEA] cursor-pointer'>+</span>
        </Flex>

        <a href="#" className='bg-[#0198E9] py-3 px-11 rounded-[3px] md:mr-[35px] text-center text-white'>Add to Cart</a>

        <button type="button" className="text-[#0198E9] py-3 px-11 hover:text-white border border-[#0198E9] hover:bg-[#0198E9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm after:text-sm text-center dark:border-[#0198E9]dark:text-[#0198E9] dark:hover:text-white dark:hover:bg-[#0198E9] dark:focus:ring-[#0198E9]">Buy Now</button>

      </Flex>


    </div>
  )
}

export default ProductInfo