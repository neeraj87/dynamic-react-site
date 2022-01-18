import React from 'react'
import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Div from "../components/containers/Div";
import Article from "../components/containers/article/Article";
import Fragment from "../components/containers/Fragment";
import Span from "../components/containers/Span";
import Anchor from "../components/Anchor";
import Nav from "../components/Nav";
import Heading1 from "../components/typography/Heading1";
import Strong from "../components/typography/Strong";
import Small from "../components/typography/Small";

const componentMap = {
    button: Button,
    input: Input,
    header: Header,
    footer: Footer,
    div: Div,
    article: Article,
    span: Span,
    fragment: Fragment,
    a: Anchor,
    nav: Nav,
    h1: Heading1,
    small: Small,
    strong: Strong
};

const generateComponentStyles = (styles) => {
    let mappedStyles = {};
    styles.forEach(style => {
        mappedStyles[style.name] = style.value;
    });
    return mappedStyles;
}

function renderer(config) {
    if (typeof componentMap[config.component] !== "undefined") {

        //creating children array for this element
        let elementChildren = [];
        if(config.children && config.children.length > 0) {
            for (let index = 0; index < config.children.length; index++) {
                const child = config.children[index];
                if(typeof child === "string") {
                    elementChildren.push(child);
                } else {
                    elementChildren.push(renderer(child));
                }
            }
        }

        return React.createElement(
            componentMap[config.component],
            {
                id: config.id,
                key: config.id,
                className: config.classes ? config.classes : null,
                style: config.styles ? generateComponentStyles(config.styles) : null
            },
            elementChildren
        );
    }
}
  
export default renderer;