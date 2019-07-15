import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoosePanelBuilder from './containers/ChoosePanelBuilder/ChoosePanelBuilder';

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
