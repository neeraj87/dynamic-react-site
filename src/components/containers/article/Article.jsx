import React from 'react'
import "./article.css";

const Article = ({ id, className, style, children }) => {
    return (
        <article id={id} style={style} className={className}>
            {children}
        </article>
    )
}

export default Article
