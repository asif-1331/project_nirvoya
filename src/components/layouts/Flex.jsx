import React from 'react'

const Flex = ({className, children, onClick}) => {
  return (
    <div className={`flex ${className}`} onClick={onClick}>{children}</div>
  )
}

export default Flex