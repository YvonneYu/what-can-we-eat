import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';


const restaurants = (props) => {
  return(
    <div className="grid-container">
      <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3">
        {props.restList.map(function (res) {
          return <Restaurant key={res.id} {...res}
                             onDelete={props.handleRestDelete}>
          </Restaurant>;
        })}
      </div>
    </div>
  )
};

restaurants.propTypes = {
  restList: PropTypes.array,
  handleRestDelete: PropTypes.func
};

export default restaurants;