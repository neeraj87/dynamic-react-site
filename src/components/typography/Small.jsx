import React from 'react'

const Small = ({ id, className, style, children }) => {
    console.log(children);
    return (
        <small id={id} style={style} className={className}>
            {children}
        </small>
    )
}

export default Small
