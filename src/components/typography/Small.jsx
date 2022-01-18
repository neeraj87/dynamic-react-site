import React from 'react'

const Small = ({ id, className, style, children }) => {
    return (
        <small id={id} style={style} className={className}>
            {children}
        </small>
    )
}

export default Small
