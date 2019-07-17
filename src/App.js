import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoicesPanelBuilder from './containers/ChoicesPanelBuilder/ChoicesPanelBuilder';
import './App.scss';

function App() {
  return (
    <div>
      <Layout>
        <RestaurantsBuilder></RestaurantsBuilder>
        <ChoicesPanelBuilder></ChoicesPanelBuilder>
      </Layout>
    </div>
  );
}

export default App;
