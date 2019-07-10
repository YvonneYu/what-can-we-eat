import React from 'react';

const restaurant = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="columns large-2"> 餐廳名稱 </div>
        <div className="columns large-4"> {props.name} </div>
      </div>
      {
        props.tel ?
          <div className="row">
            <div className="columns large-2"> 電話 </div>
            <div className="columns large-4">
              <a href={ 'tel:' + props.tel }>{props.tel}</a>
            </div>
          </div>: null
      }
      {
        props.address ?
        <div className="row">
          <div className="columns large-2"> 地址 </div>
          <div className="columns large-4"> {props.address} </div>
        </div>: null
      }
    </React.Fragment>
  )
};


export default restaurant;