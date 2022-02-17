import React from 'react'
import { Helmet } from 'react-helmet'
import componentConfig from './data/componentConfig.json';
import componentRenderer from './services/componentRenderer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {componentConfig.map(config => componentRenderer(config))}
    </div>
  );
}

export default App;
