import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';

function App() {
  return (
    <div>
      <Layout>
        <RestaurantsBuilder></RestaurantsBuilder>
      </Layout>
    </div>
  );
}

export default App;
