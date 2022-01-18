import React from 'react'
import { Helmet } from 'react-helmet'
import componentConfig from '../data/componentConfig.json';
import componentRenderer from '../services/componentRenderer';

const Wrapper = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {componentConfig.map(config => componentRenderer(config))}
        </div>
    )
}

export default Wrapper