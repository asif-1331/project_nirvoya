import React from 'react'
import Container from '../components/layouts/Container'
import ProductPhotos from '../components/layouts/ProductPhotos'
import ProductInfo from '../components/layouts/ProductInfo'
import ProductDescription from '../components/layouts/ProductDescription'
import ProductReviews from '../components/layouts/ProductReviews'
import Flex from '../components/layouts/Flex'
import Breadcrumbs from '../components/layouts/Breadcrumbs'

const Product = () => {
  return (
    <Container className='w-[100%] mb-[70px]'>
      <div className="mb-6 mt-14">
        <Breadcrumbs
          value1="Home"
          link1="/"
          value2="Product"
          link2="/product"
          value3="Men's Stand Collar Leather Jacket "
        />
      </div>
      <Flex className="gap-x-24 gap-y-10 lg:gap-y-0 mb-[84px] flex-col lg:flex-row">
        <ProductPhotos />
        <ProductInfo />
      </Flex>
      <ProductDescription />
      <ProductReviews />
    </Container>
  )
}

export default Product