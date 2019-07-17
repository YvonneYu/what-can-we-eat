import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoosePanelBuilder from './containers/ChoosePanelBuilder/ChoosePanelBuilder';
import './App.scss';

function App() {
  return (
    <div>
      <Layout>
        <RestaurantsBuilder></RestaurantsBuilder>
        <ChoosePanelBuilder></ChoosePanelBuilder>
      </Layout>
    </div>
  );
}

export default App;
