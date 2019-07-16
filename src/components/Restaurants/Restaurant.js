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
          <p>類型：{ props.choices.join(', ')}</p>
        </div>
        <div className="grid-x align-center">
          <div className="small button-group cell small-5">
            <a className="button alert" onClick={ () => props.onDelete(props.id) }>刪除</a>
            <a className="button" onClick={ () => props.onEdit(props) }>編輯</a>
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