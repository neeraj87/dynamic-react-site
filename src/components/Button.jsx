import React from 'react'

const Button = ({ id, className, style, children }) => {
    return (
        <button id={id} style={style} className={className}>
            {children}
        </button>
    )
}

export default Button
