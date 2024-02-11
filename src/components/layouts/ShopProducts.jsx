import React from 'react'
import Flex from './Flex'
import Grid from './Grid'
import Product from './Product'
import { FeaturedProduct } from '../../constants'
import DownArrow from '../../assets/ArrowDown.svg'


const ShopProducts = () => {
    return (
        <div className='mt-[62px] w-[100%]'>
            <Flex className='justify-between mb-[12px] flex-col-reverse md:flex-row gap-y-3'>
                <p className='text-[#424241]/[.50] text-lg font-[500]'> Showing
                    <span className='text-[#424241] text-lg font-[500]'> 20</span> of
                    <span className='text-[#424241] text-lg font-[500]'> 160</span> product
                </p>
                <Flex>
                    <p className='flex self-center text-[#424241]/[.50] text-lg font-[500] mr-[12px]'>Sort By:</p>
                    <select id="countries" className="px-[15px] py-[6px] bg-[#FAFAFA] w-[180px] border outline-none border-gray-300 text-gray-900 text-lg rounded-[3px] focus:ring-blue-500 focus:border-blue-500 block">
                        <option defaultValue='NEW'>Newest First</option>
                        <option value="OLD">oldest First</option>
                        <option value="LOW-TO-HIGH">price low to high</option>
                        <option value="HIGH-TO-LOW">price high to low</option>
                    </select>
                </Flex>
            </Flex>
            <Grid className='grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
                {
                    FeaturedProduct.map((product, index) => (
                        <Product
                            key={index}
                            title={product.title}
                            photo={product.photo}
                            price={product.price}
                            reviewStar={product.reviewStar}
                        />

                    ))
                }
            </Grid>

            <Flex className='justify-center pt-[40px] mb-8'>
                <button className='bg-[#34ADED] rounded-[81px]'>
                    <Flex className='py-[11px] px-[26px]'>
                        <p className='text-white text-base font-[600] uppercase mr-1'>Show more</p>
                        <img src={DownArrow} />

                    </Flex>
                </button>
            </Flex>
        </div>
    )
}

export default ShopProducts