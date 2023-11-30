import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ShippingCar from '../../assets/ShippingCar.svg'
import Star from '../../assets/Star.svg'
import Return from '../../assets/Return.svg'
import Payment from '../../assets/Payment.svg'

const FooterHeader = () => {
    return (
        <>
            <Container className='font-poppins'>
                <Flex className='px-12 pt-[62px] pb-12 justify-between'>
                    <Flex className='self-center'>
                        <img src={ShippingCar} className='mr-6  slef-center' />
                        <div className='text-text_primary'>
                            <p className='leading-normal text-[20px] font-[500] uppercase'>Free Shipping</p>
                            <p className='text-[#757575] text-[16px] font-[400]'>Order via Campaign</p>
                        </div>
                    </Flex>
                    <Flex className='self-center'>
                        <img src={Star} className='mr-6 slef-center' />
                        <div className='font-poppins text-text_primary'>
                            <p className='leading-normal text-[20px] font-[500] uppercase'>Best Price</p>
                            <p className='text-[#757575] text-[16px] font-[400]'>Quality products</p>
                        </div>
                    </Flex>
                    <Flex className='self-center'>
                        <img src={Return} className='mr-6 slef-center' />
                        <div className='font-poppins text-text_primary'>
                            <p className='leading-normal text-[20px] font-[500] uppercase'>Free Return</p>
                            <p className='text-[#757575] text-[16px] font-[400]'>Within 7 days returns</p>
                        </div>
                    </Flex>
                    <Flex className='self-center'>
                        <img src={Payment} className='mr-6 slef-center' />
                        <div className='font-poppins text-text_primary'>
                            <p className='leading-normal text-[20px] font-[500] uppercase'>Secure Payment</p>
                            <p className='text-[#757575] text-[16px] font-[400]'>100% secure payment</p>
                        </div>
                    </Flex>
                </Flex>
            </Container>
            <hr className='bg-[#E5E5E5] h-[1px]' />
        </>
    )
}

export default FooterHeader