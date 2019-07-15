import React from 'react';
import './ChoosePanel.scss';

const choosePanel  = (props) => {

  let selectorInputCom = props.priceValues.map( (value, index) => {
    let id = 'checkbox'+ index;
    return (
      <React.Fragment key={index}>
        <input id={ id } type="checkbox"
               checked={ value.checked } onChange={ () => props.onSelect(index) } />
        <label className="button" htmlFor={ id } >{ value.label }</label>
      </React.Fragment>
    )
  });

  return (
    <form onSubmit={ props.onSubmit }>
      <div className="grid-x grid-padding-x">
        <lable htmlFor="res_name">餐廳名稱
          <input type="text" name="res_name" id="res_name" placeholder="請輸入餐廳名稱..."/>
        </lable>
      </div>
      <div className="grid-x grid-padding-x panel-select">
        <fieldset className="large-5 cell">價格
          { selectorInputCom }
        </fieldset>
      </div>
      <div>
        <input type="submit" value="送出" />
      </div>
    </form>
  )
};

export default choosePanel;