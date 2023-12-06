import React from 'react'
import Flex from './Flex'
import List from './List'
import ListItem from './ListItem'
import DownArrow from '../../assets/chevron-down.svg'
import FilterStar1 from '../../assets/FilterStar1.svg'
import rating2 from '../../assets/rating.png'
import rating3 from '../../assets/rating3.png'
import rating4 from '../../assets/rating4.png'
import rating5 from '../../assets/rating5.png'


const ShopFilter = () => {

    return (
        <div className='bg-white mt-[43px] w-[300px] h-[694px]'>
            <div className="">
                
                <div className="pb-[18px] pt-[25px] pl-[19px] text-[#757575]">
                    <p className='text-[#3D3D3F] text-lg font-[500]'>Related Categories</p>
                    <List className='shop__filter__list'>
                        <li>Men’s fashion</li>
                    </List>
                    <List className='pl-[18px]'>
                        <ListItem children="Men’s Jacket" ItemClassName='text-secondary' />
                        <ListItem children="Men's T-Shirts" />
                        <ListItem children="Casual Shirts" />
                        <ListItem children="Summer T-Shirts" />

                    </List>
                </div>

                <hr className='bg-[#E5E5E5] h-[1px]' />

                <div className='pb-[25px] pt-[25px] pl-[19px]'>
                    <Flex className='pr-[12px] mb-[32px] justify-between'>
                        <p className='text-lg font-[500] text-[#383838]'>Filter by Price</p>
                        <img src={DownArrow} />
                    </Flex>
                    <input type="range" className="w-[90%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-[24px] [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:bg-white" />
                    <p className='text-[#383838] text-lg font[500]'><span className='text-[#A7A7A7] text-lg font-[400]'>Price:</span> ৳1000 - ৳2500 </p>
                </div>

                <hr className='bg-[#E5E5E5] h-[1px]' />

                <div className="pb-[27px] pt-[25px] pl-[19px]">
                    <Flex className='pr-[12px] mb-[32px] justify-between'>
                        <p className='text-lg font-[500] text-[#383838]'>Filter by Price</p>
                        <img src={DownArrow} />
                    </Flex>
                    <Flex className='self-center gap-4 mb-[16px]'>
                        <input type="checkbox" name='ReviewStar1' className=' flex self-center w-6 h-6 text-blue-600 border-[2px] bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                        <label htmlFor="ReviewStar1"><img src={FilterStar1} alt="" /></label>
                    </Flex>
                    <Flex className='self-center gap-4 mb-[16px]'>
                        <input type="checkbox" name='ReviewStar2' className=' flex self-center w-6 h-6 text-blue-600 border-[2px] bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                        <label htmlFor="ReviewStar2"><img src={rating2} alt="" /></label>
                    </Flex>
                    <Flex className='self-center gap-4 mb-[16px]'>
                        <input type="checkbox" name='ReviewStar3' className=' flex self-center w-6 h-6 text-blue-600 border-[2px] bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                        <label htmlFor="ReviewStar3"><img src={rating3} alt="" /></label>
                    </Flex>
                    <Flex className='self-center gap-4 mb-[16px]'>
                        <input type="checkbox" name='ReviewStar4' className=' flex self-center w-6 h-6 text-blue-600 border-[2px] bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                        <label htmlFor="ReviewStar4"><img src={rating4} alt="" /></label>
                    </Flex>
                    <Flex className='self-center gap-4'>
                        <input type="checkbox" name='ReviewStar5' className=' flex self-center w-6 h-6 text-blue-600 border-[2px] bg-gray-100 border-gray-300 rounded focus:ring-blue-500' />
                        <label htmlFor="ReviewStar5"><img src={rating5} alt="" /></label>
                    </Flex>
                </div>
            </div>

        </div>
    )
}

export default ShopFilter