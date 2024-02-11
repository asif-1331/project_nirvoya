import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HeaderSubCat, HeaderSubCatItems, NavHeaderCategory } from '../../constants'
import NavContainer from './NavContainer'
import ArrowScroll from '../../assets/Arrow.svg'

const DropDownNav = () => {
  return (
    <>
      <NavContainer>
        <div className='relative flex lg:display_visible'>
          <Flex className="px-3 xl:px-9 py-2 justify-between font-medium font-poppins capitalize text-sm lg:text-[15px] nav__header__overflow lg:nav__header__overflow__unset">
            {
              NavHeaderCategory.map(item => (
                <div className='flex flex-col text-center items-center transition cursor-pointer sub__header__container'>
                  <p className=' text-[#333333]/[.85] hover:text-[#0198E9] pb-[6px] w-[10rem] md:w-[10rem] lg:w-[full]'>{item}</p>
                  <div className='w-[100%] h-[2px] bg-[#0198E9] opacity-0 sub__header hover:opacity-100'></div>
                </div>
              ))
            }
          </Flex>
          <img src={ArrowScroll} className='pl-3 pb-[6px] lg:hidden' />

          {/* <Flex className="bg-white justify-between px-[71px] pt-[30px] pb-[26px] w- ">
            {
              HeaderSubCat.map((categories, index) => (
                <div>
                  <p className='text-base font-medium text-[#3D3D3F]'>{categories}</p>

                  
                </div>
              ))
            }
          </Flex> */}

        </div>
      </NavContainer>

    </>
  )
}

export default DropDownNav