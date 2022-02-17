import React from 'react'
import Button from "../components/Button";
import Input from "../components/Input";
import Image from "../components/Image";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Div from "../components/containers/Div";
import Main from "../components/containers/Main";
import Article from "../components/containers/article/Article";
import Section from "../components/containers/Section";
import Fragment from "../components/containers/Fragment";
import Span from "../components/containers/Span";
import Anchor from "../components/Anchor";
import Nav from "../components/Nav";
import Heading1 from "../components/typography/Heading1";
import Heading2 from "../components/typography/Heading2";
import Heading3 from "../components/typography/Heading3";
import Strong from "../components/typography/Strong";
import Small from "../components/typography/Small";
import Paragraph from "../components/typography/Paragraph";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

const componentMap = {
    button: Button,
    input: Input,
    img: Image,
    header: Header,
    footer: Footer,
    div: Div,
    main: Main,
    article: Article,
    section: Section,
    span: Span,
    fragment: Fragment,
    a: Anchor,
    nav: Nav,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    p: Paragraph,
    small: Small,
    ul: UnorderedList,
    li: ListItem,
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

        if(typeof config == "object" && !config.render) {
            return;
        }

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

        let defaultAttributes = {
            id: config.id,
            key: config.id,
            className: config.classes ? config.classes.join(" ") : null,
            style: config.styles ? generateComponentStyles(config.styles) : null
        };

        if(config.component === "img" || config.component === "a") {
            for(let index = 0; index < config.additionalAttributes.length; index++) {
                let additionalAttribute = config.additionalAttributes[index];
                defaultAttributes[additionalAttribute.name] = additionalAttribute.value;
            }
        }

        return React.createElement(
            componentMap[config.component],
            defaultAttributes,
            elementChildren
        );
    }
}
  
export default renderer;