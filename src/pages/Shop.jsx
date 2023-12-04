import React from 'react'
import Flex from '../components/layouts/Flex'
import ShopFilter from '../components/layouts/ShopFilter'
import ShopProducts from '../components/layouts/ShopProducts'
import Container from '../components/layouts/Container'

const Shop = () => {
  return (
    <Container>
        <Flex className='gap-[53px]'>
            <ShopFilter/>
            <ShopProducts/>
        </Flex>
    </Container>
  )
}

export default Shop