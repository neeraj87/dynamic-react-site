import React from 'react'

const Heading3 = ({ id, className, style, children }) => {
  return (
    <h3 id={id} style={style} className={className}>
            {children}
    </h3>
  )
}

export default Heading3