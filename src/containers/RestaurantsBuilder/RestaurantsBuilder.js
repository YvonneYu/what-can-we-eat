import React, {Component} from 'react';
import uuid from 'uuid/v4';
import Restaurant from '../../components/Restaurants/Restaurant';
import { createStore } from 'redux';
import restaurantList from '../../reducers/restaurantList';

let store = createStore(restaurantList);

class restaurantsBuilder extends Component {

  state = {
    res: store.getState()
  };

  render() {
    let resComponent = null;

    if (this.state.res.length) {
      resComponent = this.state.res.map(function (res, index) {
        return <Restaurant key={res.id} {...res}></Restaurant>;
      });
    } else {
      resComponent = <p>很抱歉，無搜尋結果...</p>;
    }
    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x small-up-2 medium-up-3">
          {resComponent}
        </div>
      </div>
    )
  }
}

export default restaurantsBuilder;