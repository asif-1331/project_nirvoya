import React from 'react'
import Flex from './Flex'


const AvgRevBar = () => {
    return (
        <>
            <Flex className=" self-center mb-[10px] lg:justify-between">
                <p className='text-sm font-[400] text-[#3D3D3F] flex self-center'>5 Stars</p>
                <div className="px-[11px] flex self-center">
                    <div className='relative'>
                        <div className="w-[150px] md:w-[201px] h-[8px] bg-[#DBDEDF] rounded-[5px]"></div>
                        <div className="w-[150px] md:w-[201px] h-[8px] bg-[#FFB340] absolute top-0 left-0 rounded-[5px]"></div>
                    </div>
                </div>
                <p className='text-sm font-[400] text-[#3D3D3F] flex self-center'>79%</p>
            </Flex>
        </>
    )
}

export default AvgRevBar