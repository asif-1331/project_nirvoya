import React from 'react'
import Container from '../components/layouts/Container'
import HomeSlider from '../components/layouts/HomeSlider'
import HeroImg1 from '../assets/HeroImage1.jpg'
import HeroImg2 from '../assets/HeroImage2.jpg'
import Flex from '../components/layouts/Flex'
import Categories from '../components/layouts/Categories'
import FeaturedProducts from '../components/layouts/FeaturedProducts'
import FlashDealProducts from '../components/layouts/FlashDealProducts'



const Home = () => {
  return (
    <Container className='font-poppins'>
      <Flex  className='pt-3 gap-x-7'>
        <HomeSlider />
        <Flex className="hidden lg:display_visible">
          <div className='w-[448px]'>
            <a href="" className='pb-7 inline-block'> 
              <img src={HeroImg1} alt='Groceries collection'  />
            </a>
            <a href="">
              <img src={HeroImg2} alt='Health & Beauty collection' />
            </a>
          </div>
        </Flex>
      </Flex>


      <Categories />
      <FlashDealProducts />
      <FeaturedProducts />
    </Container>
  )
}

export default Home