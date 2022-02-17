import React from 'react'

const Image = ({ id, className, style, children, src, alt, height, width }) => {
  return (
    <img id={id} src={src} style={style} className={className} alt={alt} height={height} width={width} />
  )
}

export default Image