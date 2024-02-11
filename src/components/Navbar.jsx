import React from 'react'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import logo from '../assets/logo.png'
import Search from '../assets/SearchIcon.svg'
import User from '../assets/User.svg'
import Wishlist from '../assets/WishList.svg'
import Cart from '../assets/Cart.svg'
import DropDownNav from './layouts/DropDownNav'
import NavContainer from './layouts/NavContainer'

const Navbar = () => {
    return (
        <div className='bg-[#FBFBFB] fixed top-0 left-0 w-[100%] z-50'>
            <NavContainer>
                <div className=''>
                    <Flex className='relative font-poppins justify-between pt-8 pb-24 sm:pb-8'>
                        <a href="/" >
                            <Img src={logo} alt={'Project Nirvoya Logo'} WrapperClassName='w-[10%]' ImgClassName="w-[80%] md:w-full" />
                        </a>

                        <div className='absolute sm:position_unset bottom-5 left-[50%] sm:translate-x-0 translate-x-[-50%] w-[20rem] lg:w-[60%]'>
                            <div className='relative w-[100%] 2xl:w-[778px]'>
                                <input type="search" className='bg-[#F6F6F6] rounded-[5px] border-[1px] border-[#F1F1F1] py-3 px-5 outline-none w-[100%]' placeholder="I'm looking for..." />
                                <div className='py-2 px-4 h-[100%] bg-[#0198E9] border border-[#0198E9] absolute right-0 bottom-0 rounded-r-[5px] cursor-pointer'>
                                    <img src={Search} />
                                </div>
                            </div>
                        </div>

                        <Flex>
                            <Flex className='self-center mr-4 md:mr-10 text-sm justify-center cursor-pointer'>
                                <img src={User} alt="" className='mr-[6px]' />
                                <p className=' hidden lg:display_visible_flex self-center'>Login</p>
                            </Flex>
                            <Flex className='self-center mr-4 md:mr-10 text-sm justify-center cursor-pointer'>
                                <img src={Wishlist} alt="" className='mr-[6px]' />
                                <p className=' hidden lg:display_visible_flex self-center'>Whislist</p>
                            </Flex>
                            <Flex className='relative self-center text-sm justify-center cursor-pointer'>
                                <img src={Cart} alt="" className='h-[20.227px] w-[23.5px] mr-[6px]' />
                                <p className=' hidden lg:display_visible_flex self-center'>My Cart</p>
                                <div className='absolute md:position_unset top-[-px] right-[-2px] h-[20px] w-[20px] bg-primary rounded-[50%] md:ml-[8.5px] flex self-center justify-center text-[12px] text-white'>
                                    1
                                </div>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </NavContainer>

            <div>
                <DropDownNav />
            </div>
            <hr className='bg-[#E5E5E5] h-[1px]' />
        </div>
    )
}

export default Navbar