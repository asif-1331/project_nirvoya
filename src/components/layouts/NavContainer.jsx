import React from 'react'

const NavContainer = ({className, children}) => {
  return (
    <div className={`max-w-container m-auto px-5 lg:px-10 2xl:px-0 ${className}`}>{children}</div>
  )
}

export default NavContainer