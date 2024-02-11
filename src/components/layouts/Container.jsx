import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-container m-auto px-5 lg:px-10 2xl:px-0 mt-[15rem] md:mt-44 ${className}`}>{children}</div>
  )
}

export default Container