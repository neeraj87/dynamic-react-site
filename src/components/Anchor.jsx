import React from 'react'

const Anchor = ({ id, className, style, children }) => {
    return (
        <a id={id} href='/#' style={style} className={className}>{children}</a>
    )
}

export default Anchor
