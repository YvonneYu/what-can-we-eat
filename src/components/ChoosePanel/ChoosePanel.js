import React from 'react';
import ChoiceSelectors from './ChoiceSelectors';
import RestaurantInput from './RestaurantInput';
import './ChoosePanel.scss';

const choosePanel  = (props) => {

  let selectorsItems = props.choices.map((choice, index) => {
    return <ChoiceSelectors key={ index }
                            type={ choice.type }
                            list={ choice.data }
                            onChange={ props.onSelectorChange }
                            label={ choice.label }>
          </ChoiceSelectors>;
  });

  let resItems = [];
  for (let key in props.resInfo) {
    let currentInfo = props.resInfo[key];
    // 在 creation mode 時，非創建 input 不用顯示
    if (props.isCreationMode && !currentInfo.showInCreationMode) {
      break;
    }
    resItems.push({
      ...currentInfo,
      id: key
    })
  }

  return (
    <form onSubmit={ props.onSubmit }>
      <div className="grid-x grid-padding-x">
          {
            resItems.map((resInput, index) => {
              return (
                <RestaurantInput key={ index } {...resInput}
                                 onChange={ props.onInfoChange }>
                </RestaurantInput>)
            })
          }
      </div>
      { selectorsItems }
      <div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <fieldset className="cell large-6">
              <button className="button success" type="submit" value="Submit">送出</button>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  )
};

export default choosePanel;