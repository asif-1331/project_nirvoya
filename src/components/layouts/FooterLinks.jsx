import React from 'react'
import Container from './Container'
import Flex from './Flex'
import PayWith from '../../assets/PayWith.png'
import List from './List'
import Img from './Img'
import logo from '../../assets/logo.png'
import ListItem from './ListItem'
import SocialIcons from '../../assets/Social_Icons.png'
import ListItemLink from './ListItemLink'
import ContactIcon from '../../assets/Contact.svg'


const FooterLinks = () => {
    return (
        <>
            <Container className='font-poppins text-text_primary'>
                <Flex className='justify-between pt-12 pb-16'>

                    <div>
                        <Img src={logo} />
                        <p className='max-w-[390px] font-[400] text-lg mt-9 mb-[26px] font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={SocialIcons} alt="Social Media Links" />
                    </div>

                    <div>
                        <p className='text-text_primary text-xl font-[500] uppercase mb-6'>Quick Links</p>
                        <List>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>About us</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>Contact us</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>Products</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>Login</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins text-[#333]/[.80]'>Sign Up</ListItemLink>
                        </List>
                    </div>

                    <div>
                        <p className='text-text_primary text-xl font-[500] uppercase mb-6'>Customer Area</p>
                        <List>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>My Account</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>Orders</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>Terms</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins mb-[11px] text-[#333]/[.80]'>Privacy Policy</ListItemLink>
                            <ListItemLink ItemClassName='font-poppins text-[#333]/[.80]'>Shipping Information</ListItemLink>
                        </List>
                    </div>

                    <div>
                        <p className='text-text_primary text-xl font-[500] uppercase mb-6'>Contact</p>
                        <p className='w-[340px] text-[#333]/[.80] text-base font-[400] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                        <Flex>
                            <img src={ContactIcon} alt="Contact Us" className='mr-7' />
                            <div>
                                <p className='text-base font-[400]'>Have any question?</p>
                                <p className='text-2xl text-secondary font-[600]'>099 456 789</p>
                            </div>
                        </Flex>
                    </div>

                </Flex>
            </Container>
            <hr className='bg-[#E5E5E5] h-[1px]' />
            <Container>
                <Flex className='justify-between pt-4 pb-5'>
                    <p className='flex self-center'>Projectnirvoya -   © 2021 All Rights Reserved</p>
                    <Flex className='self-center'>
                        <p className='text-lg text-primary/[.80] font-[500]'>Pay With</p>
                        <img src={PayWith} alt="Pay with" />
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}

export default FooterLinks