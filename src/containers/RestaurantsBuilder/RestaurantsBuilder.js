import React, {Component} from 'react';
import Restaurant from '../../components/Restaurants/Restaurant';

class restaurantsBuilder extends Component {

  state = {
    res: [
      {
        name: 'test1 餐廳',
        tel: '021234567'
      },
      {
        name: 'test2 餐廳',
        address: '測試的地址要很長測試的地址要很長'
      },
      {
        name: 'test333333333333 餐廳'
      }
    ]
  };

  render() {
    let resComponent = null;

    if (this.state.res.length) {
      resComponent = this.state.res.map(function (res, index) {
        return <Restaurant key={index} {...res}></Restaurant>;
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