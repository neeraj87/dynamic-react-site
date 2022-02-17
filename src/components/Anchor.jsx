import React from 'react'

const Anchor = ({ id, className, style, children, href, target }) => {
    return (
        <a id={id} href={href} style={style} className={className} target={target}>{children}</a>
    )
}

export default Anchor
