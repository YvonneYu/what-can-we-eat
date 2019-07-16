import React from 'react';
import PropTypes from 'prop-types';
import './Restaurant.scss';

const restaurant = (props) => {
  return (
    <div className="cell">
      <div className="card card-size">
        <div className="card-section">
          <p>名稱：{props.name} </p>
          <p>電話：{props.tel ? (<a href={'tel:' + props.tel}>{props.tel}</a>) : null}</p>
          <p>地址：{props.address} </p>
        </div>
        <div className="grid-x align-right">
          <div className="small button-group cell small-6">
            <a className="button alert">刪除</a>
            <a className="button">編輯</a>
          </div>
        </div>
      </div>
    </div>
  )
};

restaurant.propTypes = {
  name: PropTypes.string.isRequired
};

export default restaurant;