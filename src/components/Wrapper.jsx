import React from 'react'
import componentConfig from '../data/componentConfig.json';
import componentRenderer from '../services/componentRenderer';

const Wrapper = () => {
    return (
        <div>
            {componentConfig.map(config => componentRenderer(config))}
        </div>
    )
}

export default Wrapper