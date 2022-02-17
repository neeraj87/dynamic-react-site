import React from 'react'

const Header = ({ id, className, style, children }) => {
    return (
        <header id={id} style={style} className={className}>
            {children}
        </header>
    )
}

export default Header
