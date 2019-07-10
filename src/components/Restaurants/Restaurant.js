import React from 'react';
import PropTypes from 'prop-types';
import styles from './Restaurant.css';

const restaurant = (props) => {
  console.log('styles', styles);
  return (
    <div className={'columns large-6 ' + styles.restaurant}>
      <div className="row">
        <div className="columns small-2"> 餐廳名稱 </div>
        <div className="columns small-4"> {props.name} </div>
      </div>
      {
        props.tel ?
          <div className="row">
            <div className="columns small-2"> 電話 </div>
            <div className="columns small-4">
              <a href={ 'tel:' + props.tel }>{props.tel}</a>
            </div>
          </div>: null
      }
      {
        props.address ?
        <div className="row">
          <div className="columns small-2"> 地址 </div>
          <div className="columns small-4"> {props.address} </div>
        </div>: null
      }
    </div>
  )
};

restaurant.propTypes = {
  name: PropTypes.string.isRequired
};

export default restaurant;