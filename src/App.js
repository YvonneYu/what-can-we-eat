import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoicesPanelBuilder from './containers/ChoicesPanelBuilder/ChoicesPanelBuilder';
import {connect} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <RestaurantsBuilder></RestaurantsBuilder>
          <ChoicesPanelBuilder></ChoicesPanelBuilder>
        </Layout>
      </div>
      <div className={ 'is-loading ' + (props.isLoading && 'is-visible') }>
        <div className="sp sp-circle"></div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
    isLoading: state.restaurantList.isLoading
  }
);

export default connect(mapStateToProps)(App);
