import React from 'react'

const ListItem = ({ id, className, style, children }) => {
  return (
    <li id={id} style={style} className={className}>
        {children}
    </li>
  )
}

export default ListItem