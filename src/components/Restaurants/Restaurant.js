import React from 'react';
import PropTypes from 'prop-types';
import './Restaurant.scss';

const restaurant = (props) => {
  return (
    <div className="cell">
      <div className="card">
          <div className="card-section">
            <p>名稱：{props.name} </p>
            <p>電話：{ props.tel? (<a href={ 'tel:' + props.tel }>{props.tel}</a>) : null}</p>
            <p>地址：{props.address} </p>
          </div>
      </div>
    </div>
  )
};

restaurant.propTypes = {
  name: PropTypes.string.isRequired
};

export default restaurant;