import React from 'react';
import PropTypes from 'prop-types';
import './Restaurant.scss';

const restaurant = (props) => {
  return (
        <tr>
          <td>{props.name}</td>
          <td> { props.tel? (<a href={ 'tel:' + props.tel }>{props.tel}</a>) : null}</td>
          <td> {props.address} </td>
        </tr>
  )
};

restaurant.propTypes = {
  name: PropTypes.string.isRequired
};

export default restaurant;