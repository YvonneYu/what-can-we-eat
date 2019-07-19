import React from 'react';
import Layout from './components/Layout/Layout.js';
import RestaurantsBuilder from './containers/RestaurantsBuilder/RestaurantsBuilder';
import ChoicesPanelBuilder from './containers/ChoicesPanelBuilder/ChoicesPanelBuilder';
import FindPanelBuilder from './containers/FindPanelBuilder/FindPanelBuilder';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Layout>
          <Route path="/" exact component={ FindPanelBuilder }></Route>
          <Route path="/show-all" exact component={ RestaurantsBuilder }></Route>
          <Route path="/create-rest" exact component={ ChoicesPanelBuilder }></Route>
          <Route path="/edit/:id" exact component={ ChoicesPanelBuilder }></Route>
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
