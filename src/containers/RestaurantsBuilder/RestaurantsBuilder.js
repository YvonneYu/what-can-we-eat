import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Restaurants from '../../components/Restaurants/Restaurants';
import { deleteRest, getRestListIfNeed } from '../../actions/actions';

class restaurantsBuilder extends Component {

  componentDidMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  render() {
    let resComponent = null;
    if (this.props.restList.length) {
      resComponent = <Restaurants restList={ this.props.restList } handleRestDelete={ this.props.handleRestDelete } />
    // 下方顯示無 Rest 的情況
    } else if (this.props.isLoading) {
      resComponent = <p>Loading...</p>;
    } else {
      resComponent = <p>很抱歉，目前沒有適合的餐廳喔！</p>;
    }
    return (
      resComponent
    )
  }
}

restaurantsBuilder.propsType = {
  restList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  // display the given number of list
  displayNum: PropTypes.number
};

const mapStateToProps = state => ({
    restList: state.restaurantList.restList,
    isLoading: state.restaurantList.isLoading
  }
);

const mapDispatchToProps = (dispatch) => ({
  handleRestDelete: (id) => {
      dispatch(deleteRest(id));
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(restaurantsBuilder);