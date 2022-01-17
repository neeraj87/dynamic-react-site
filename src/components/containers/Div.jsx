import React from 'react'

const Div = ({ id, className, style, children }) => {
    return (
        <div id={id} style={style} className={className}>
            {children}
        </div>
    )
}

export default Div
