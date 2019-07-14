import React from 'react';
import styles from './ChoosePanel.scss';

const choosePanel  = (props) => {
  return (
    <form>
      <div className="grid-x grid-padding-x">
        <lable htmlFor="res_name">餐廳名稱
          <input type="text" name="res_name" id="res_name" placeholder="請輸入餐廳名稱..."/>
        </lable>
      </div>
      <div className="grid-x grid-padding-x panel-select">
        <fieldset className="large-5 cell">價格
          <input id="checkbox1" type="checkbox"/>
          <label className="button" htmlFor="checkbox1">便宜</label>
          <input id="checkbox2" type="checkbox"/>
          <label className="button" htmlFor="checkbox2">還可以</label>
          <input id="checkbox3" type="checkbox"/>
          <label className="button" htmlFor="checkbox3">貴</label>
        </fieldset>
      </div>
    </form>
  )
};

export default choosePanel;