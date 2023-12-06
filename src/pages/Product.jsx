import React from 'react'
import Container from '../components/layouts/Container'
import ProductPhotos from '../components/layouts/ProductPhotos'
import ProductInfo from '../components/layouts/ProductInfo'
import ProductDescription from '../components/layouts/ProductDescription'
import ProductReviews from '../components/layouts/ProductReviews'
import Flex from '../components/layouts/Flex'

const Product = () => {
  return (
    <Container className='w-[100%]'>
        <Flex>
            <ProductPhotos/>
            <ProductInfo/>
        </Flex>
        <ProductDescription/>
        <ProductReviews/>
    </Container>
  )
}

export default Product