import React from 'react'
import "./header.css";

const Header = ({ id, className, style, children }) => {
    return (
        <header id={id} style={style} className={className}>
            {children}
        </header>
    )
}

export default Header
