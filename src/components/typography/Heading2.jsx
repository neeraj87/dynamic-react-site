import React from 'react'

const Heading2 = ({ id, className, style, children }) => {
  return (
    <h2 id={id} style={style} className={className}>
        {children}
    </h2>
  )
}

export default Heading2