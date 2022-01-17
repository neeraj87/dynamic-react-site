import React from 'react'

const Heading1 = ({ id, className, style, children }) => {
    return (
        <h1 id={id} style={style} className={className}>
            {children}
        </h1>
    )
}

export default Heading1
