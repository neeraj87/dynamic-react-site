import React from 'react'

const UnorderedList = ({ id, className, style, children }) => {
  return (
    <ul id={id} style={style} className={className}>
        {children}
    </ul>
  )
}

export default UnorderedList