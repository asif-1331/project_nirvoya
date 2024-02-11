import React from 'react'
import Grid from './Grid'
import Product from './Product'
import { FlashSaleProduct } from '../../constants'
import Flex from './Flex'
import RightArrow from '../../assets/arrow-right.svg'


const FlashDealProducts = () => {
  return (
    <div className='mb-[50px]'>
      <Flex className='justify-between pb-[20px]'>
        <p className='text-[#2E2E2E] text-[26px] font-[500]'>Flash Deals</p>
        <a className='flex items-center'>
          <Flex className='cursor-pointer'>
            <p className='text-[#757575] text-[16px] flex self-center font-[500] mr-[18px] w-[5.4rem]'>View more</p>
            <img src={RightArrow} />
          </Flex>
        </a>
      </Flex>
      <Grid className='grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {
          FlashSaleProduct.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              photo={product.photo}
              price={product.price}
              reviewStar={product.reviewStar}
              discount={product.discount}
            />
          ))
        }
      </Grid>
    </div>
  )
}

export default FlashDealProducts