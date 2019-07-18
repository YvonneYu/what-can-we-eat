import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Restaurant from '../../components/Restaurants/Restaurant';
import { getRandomIntList } from '../../utils/utils';
import { deleteRest, getRestListIfNeed } from '../../actions/actions';

class restaurantsBuilder extends Component {

  componentDidMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  randomSelectRest(displayNumber) {
    let len = this.props.restList.length;
    let list = this.props.restList;
    // 如果沒有指定要顯示幾筆，或是 list 長度比少指定長度小，直接回傳 list
    if (!displayNumber || len <= displayNumber) return list;

    return getRandomIntList(displayNumber,len).map((index) => {
        return list[index];
    })
  }

  render() {
    let resComponent = null;
    let restList = this.randomSelectRest(this.props.displayNum);
      let handleDelete = (id) => {
      this.props.dispatch(deleteRest(id));
    };

    if (restList.length) {
      resComponent = restList.map(function (res) {
        return <Restaurant key={res.id} {...res}
                           onDelete={ handleDelete }>
               </Restaurant>;
      });
    } else if (this.props.isLoading) {
      resComponent = <p>Loading...</p>;
    } else {
      resComponent = <p>很抱歉，目前沒有適合的餐廳喔！</p>;
    }
    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3">
          {resComponent}
        </div>
      </div>
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
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(restaurantsBuilder);