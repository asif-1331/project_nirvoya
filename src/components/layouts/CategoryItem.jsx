import React from 'react'
import Arrow from '../../assets/Arrow.svg'
import Flex from './Flex'

const CategoryItem = ({ SvgSrc, SvgAlt, title, CategoryItemLink }) => {
    return (
        <a href={CategoryItemLink} className='inline-block bg-white shadow-categories rounded-md cursor-pointer'>
            <Flex className='py-4 pl-[18px] pr-2 self-center justify-between'>
                <Flex className='self-center mr-6'>
                    <img src={SvgSrc} alt={SvgAlt} className='mr-[5px]' />
                    <p className='flex self-center text-base font-[400] text-[#394146]'>{title}</p>
                </Flex>
                <img src={Arrow} />
            </Flex>
        </a>
    )
}

export default CategoryItem