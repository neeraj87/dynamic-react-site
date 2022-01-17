import React from 'react'

const Anchor = ({ id, className, style, children }) => {
    return (
        <a id={id} href='www.google.com' style={style} className={className}>{children}</a>
    )
}

export default Anchor
