import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Restaurant from '../../components/Restaurants/Restaurant';
import { deleteRest, getRestListIfNeed } from '../../actions/actions';

class restaurantsBuilder extends Component {

  componentDidMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  render() {
    let resComponent = null;
    let handleDelete = (id) => {
      this.props.dispatch(deleteRest(id));
    };

    if (this.props.restList.length) {
      resComponent = this.props.restList.map(function (res) {
        return <Restaurant key={res.id} {...res}
                           onDelete={ handleDelete }>
               </Restaurant>;
      });
    } else if (this.props.isLoading) {
      resComponent = <p>Loading...</p>;
    } else {
      resComponent = <p>很抱歉，無搜尋結果...</p>;
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
  isLoading: PropTypes.bool
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