import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoicesPanelBuilder from './containers/ChoicesPanelBuilder/ChoicesPanelBuilder';
import {connect} from "react-redux";
import './App.scss';

function App(props) {
  return (
    <div>
      <Layout>
        <RestaurantsBuilder></RestaurantsBuilder>
        <ChoicesPanelBuilder></ChoicesPanelBuilder>
      </Layout>
      <div className={ props.isLoading && 'is-loading'}>
        <div className="sp sp-circle"></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    isLoading: state.restaurantList.isLoading
  }
);

export default connect(mapStateToProps)(App);
