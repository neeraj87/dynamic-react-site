import React from 'react'

const Main = ({ id, className, style, children }) => {
  return (
    <main id={id} style={style} className={className}>
        {children}
    </main>
  )
}

export default Main