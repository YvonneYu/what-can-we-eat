import React from 'react';
import ChoiceSelectors from './ChoiceSelectors';
import './ChoosePanel.scss';

const choosePanel  = (props) => {

  let selectorsItems = props.choices.map((choice, index) => {
    return <ChoiceSelectors key={ index } list={ choice.data } label={ choice.label }></ChoiceSelectors>;
  });

  return (
    <form onSubmit={ props.onSubmit }>
      <div className="grid-x grid-padding-x">
        <lable htmlFor="res_name">餐廳名稱
          <input type="text" name="res_name" id="res_name" placeholder="請輸入餐廳名稱..."/>
        </lable>
      </div>
      { selectorsItems }
      <div>
        <input type="submit" value="送出" />
      </div>
    </form>
  )
};

export default choosePanel;