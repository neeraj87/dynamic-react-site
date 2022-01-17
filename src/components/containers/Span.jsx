import React from 'react'

const Span = ({ id, className, style, children }) => {
    return (
        <span id={id} style={style} className={className}>
            {children}
        </span>
    )
}

export default Span
