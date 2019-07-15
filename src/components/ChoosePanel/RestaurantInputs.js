import React from 'react';
import './ChoosePanel.scss';

const restaurantInputs = ({name, tel, address, onChange}) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <label htmlFor="res_name">名稱</label>
        <input type="text" name="res_name" id="res_name"
               value={name} onChange={ (event) => onChange(event, 'name') } placeholder="請輸入餐廳名稱..."/>
      </div>
      <div className="cell">
        <label htmlFor="res_tel">電話</label>
        <input type="tel" name="res_tel" id="res_name"
               value={tel} onChange={ (event) => onChange(event, 'tel') } placeholder="請輸入餐廳電話..."/>
      </div>
      <div className="cell">
        <label htmlFor="res_address">地址</label>
        <input type="text" name="res_address" id="res_name"
               value={address} onChange={ (event) => onChange(event, 'address') } placeholder="請輸入餐廳地址..."/>
      </div>
    </div>
    )
};

export default restaurantInputs;