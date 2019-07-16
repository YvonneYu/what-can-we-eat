import React, {Component} from 'react';
import { connect } from 'react-redux'
import { deleteRest } from '../../actions/actions';
import Restaurant from '../../components/Restaurants/Restaurant';

class restaurantsBuilder extends Component {
  render() {
    let resComponent = null;
    let handleDelete = this.props.onDelete;

    if (this.props.restList.length) {
      resComponent = this.props.restList.map(function (res) {
        return <Restaurant key={res.id} {...res} onDelete={ handleDelete }></Restaurant>;
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

const mapStateToProps = state => ({
    restList: state
  }
);

const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => {
      dispatch(deleteRest(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(restaurantsBuilder);