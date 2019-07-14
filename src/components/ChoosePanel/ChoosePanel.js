import React from 'react';
import styles from './ChoosePanel.scss';

const choosePanel  = (props) => {
  return (
    <form>
      <lable for="res_name">餐廳名稱
        <input type="text" name="res_name" id="res_name" placeholder="請輸入餐廳名稱..."/>
      </lable>
      <lable>價格
        <div className="button-group panel-select">
          <input id="checkbox1" type="checkbox"/>
          <label className="button" for="checkbox1">便宜</label>
          <input id="checkbox2" type="checkbox"/>
          <label className="button" for="checkbox2">還可以</label>
          <input id="checkbox3" type="checkbox"/>
          <label className="button" for="checkbox3">貴</label>
        </div>
      </lable>
    </form>
  )
};

export default choosePanel;