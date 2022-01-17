import React from 'react'

const Strong = ({ id, className, style, children }) => {
    return (
        <strong id={id} style={style} className={className}>
            {children}
        </strong>
    )
}

export default Strong
