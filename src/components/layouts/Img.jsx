import React from 'react'

const Img = ({ WrapperClassName, ImgClassName, src, alt }) => {
  return (
    <>
      <picture className={WrapperClassName}>
        <img className={ImgClassName} src={src} alt={alt} loading='lazy' />
      </picture>
    </>
  )
}

export default Img