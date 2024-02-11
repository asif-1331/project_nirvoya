import React, { useState } from 'react'

const InputField = ({ name, type = "text", rows, placeholderValue, textArea, titleClassName }) => {

    let [inputVal, setInputValue] = useState('')

    return (
        <div className='mb-6'>
            <p className={titleClassName}>{name}</p>
            {
                textArea ?
                    <textarea rows={rows} placeholder={placeholderValue} className='mt-4 border-[1px] border-[#A7A7A7] outline-none w-full lg:w-[745px] rounded-[5px] bg-[#FAFAFA] p-2' onChange={(e) => setInputValue(e.target.value)} value={inputVal}></textarea>
                    :
                    <input type={type} name={name} placeholder={placeholderValue} onChange={(e) => setInputValue(e.target.value)} value={inputVal} className='mt-4 border-[1px] border-[#A7A7A7] outline-none w-full lg:w-[745px] rounded-[5px] bg-[#FAFAFA] p-2 ' />

            }
        </div>
    )
}

export default InputField