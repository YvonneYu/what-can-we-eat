import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Restaurant.scss';

const restaurant = (props) => {
  return (
    <div className="cell">
      <div className="card card-size">
        <div className="card-section">
          <p>名稱：{ props.name } </p>
          <p>電話：{ props.tel ? (<a href={'tel:' + props.tel}>{props.tel}</a>) : null}</p>
          <p>地址：{ props.address } </p>
          <p>類型：{ props.choices.join(', ') }</p>
        </div>
        <div className="grid-x align-center">
          <div className="small button-group cell small-5">
            <button className="button alert" onClick={ () => props.onDelete(props.id) }>刪除</button>
            <Link to={'/edit/' + props.id} className="button">編輯</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string,
  address: PropTypes.string,
  choices: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};

export default restaurant;