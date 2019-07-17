import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import Restaurant from '../../components/Restaurants/Restaurant';
import { deleteRest,
  mapChoicesInputsFromRest,
  getRestListIfNeed,
  setLoading
} from '../../actions/actions';

class restaurantsBuilder extends Component {

  componentDidMount() {
    this.props.dispatch(setLoading(true));
    this.props.dispatch(getRestListIfNeed());
  }

  render() {
    let resComponent = null;
    let handleDelete = this.props.onDelete;
    let handleEdit = this.props.onEdit;

    if (this.props.restList.length) {
      resComponent = this.props.restList.map(function (res) {
        return <Restaurant key={res.id} {...res}
                           onDelete={ handleDelete }
                           onEdit={ handleEdit }>
               </Restaurant>;
      });
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
  restList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    restList: state.restaurantList.restList
  }
);

const mapDispatchToProps = (dispatch) => ({
    onEdit: (rest) => {
      dispatch(mapChoicesInputsFromRest(rest))
    },
    onDelete: (id) => {
      dispatch(deleteRest(id))
    },
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(restaurantsBuilder);