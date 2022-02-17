import React from 'react'

const Paragraph = ({ id, className, style, children }) => {
  return (
    <p id={id} style={style} className={className}>{children}</p>
  )
}

export default Paragraph