import React from 'react'

const Nav = ({ id, className, style, children }) => {
    return (
        <nav id={id} style={style} className={className}>
            {children}
        </nav>
    )
}

export default Nav
