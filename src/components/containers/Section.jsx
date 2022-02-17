import React from 'react'

const Section = ({ id, className, style, children}) => {
  return (
    <section id={id} style={style} className={className}>
        {children}
    </section>
  )
}

export default Section