import React, {Component} from 'react';
import { connect } from 'react-redux'
import Restaurant from '../../components/Restaurants/Restaurant';

class restaurantsBuilder extends Component {
  render() {
    let resComponent = null;

    if (this.props.restList.length) {
      resComponent = this.props.restList.map(function (res) {
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

const mapStateToProps = state => ({
    restList: state
  }
);

export default connect(mapStateToProps)(restaurantsBuilder);