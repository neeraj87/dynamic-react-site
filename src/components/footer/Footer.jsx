import React from 'react'
import "./footer.css"

const Footer = ({ id, className, style, children }) => {
    return (
        <footer id={id} style={style} className={className}>
            {children}
        </footer>
    )
}

export default Footer
