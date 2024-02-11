import React from 'react'
import Flex from './Flex'

const ProductDescription = () => {
  return (
    <div className="bg-white font-poppins mb-6">
      <div className='py-5 lg:pl-12 px-6 bg-[#FCFCFC] border-[1px] border-[#F1F1F1]'>
        <p className='text-[#0198E9] text-2xl font-medium'>Product details of LED Monitor With High Quality In The World</p>
      </div>

      <div className='lg:pl-12 px-6 pt-[25px] pb-[35px] text-[#333333]'>
        <p className='text-2xl font-bold pb-5'>See the best picture no matter where you sit</p>
        <Flex className="justify-between flex-col gap-y-6 md:gap-y-0 md:flex-row">
          <ul className='list-disc ml-5'>
            <li>Size : M, L, XL</li>
            <li>Product Type : Jogger</li>
            <li>Main Material : Cotton</li>
            <li>Gender : Male</li>
            <li>Waist : Mid-rise</li>
            <li>Zip : Fly</li>
          </ul>
          <ul className='list-disc ml-5'>
            <li>Zipper : Yes</li>
            <li>Pocket : Two front and One Back Pockets.</li>
            <li>100% Authentic Product</li>
            <li> Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>
          </ul>
        </Flex>
      </div>
      <hr className='bg-[#F1F1F1]'/>
      <div className='lg:pl-12 px-6 pt-[25px] pb-[35px]'>
        <p className='text-2xl font-bold pb-5'>Powerful intelligence for perfection</p>
        <p className='text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
          </p>
      </div>
    </div>
  )
}

export default ProductDescription