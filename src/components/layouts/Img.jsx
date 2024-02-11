import React from 'react'

const Img = ({ WrapperClassName, ImgClassName, src, alt, photoID, onClick}) => {
  return (
    <>
      <picture className={WrapperClassName}>
        <img className={ImgClassName} src={src} alt={alt} loading='lazy' data-photo-id={photoID} onClick={onClick}/>
      </picture>
    </>
  )
}

export default Img