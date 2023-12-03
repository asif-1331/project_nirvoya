import React from 'react'
import CategoryItem from './CategoryItem'
import { CategoryItems } from '../../constants'
import Grid from './Grid'



const Categories = () => {
  return (
    <div className='pt-[50px] pb-11'>
      <p className='pb-8 text-2xl font-[500] text-text_primary'>Category</p>
      <Grid className='grid-cols-5 gap-3'>
        {
          CategoryItems.map((Item, index) => (
            <CategoryItem
              key={index}
              SvgSrc={Item.icon}
              SvgAlt={Item.title}
              title={Item.title}
            />
          ))
        }
      </Grid>
    </div>
  )
}

export default Categories