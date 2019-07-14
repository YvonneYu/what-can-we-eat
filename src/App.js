import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoosePanel from './components/ChoosePanel/ChoosePanel';

function App() {
  return (
    <div>
      <Layout>
        <RestaurantsBuilder></RestaurantsBuilder>
        <ChoosePanel></ChoosePanel>
      </Layout>
    </div>
  );
}

export default App;
