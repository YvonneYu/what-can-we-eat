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
  for (let key in props.restInfo) {
    let currentInfo = props.restInfo[key];
    // 在 creation mode 時，非創建 input 不用顯示
    // if (!props.isEditMode && !currentInfo.showInCreationMode) {
    //   break;
    // }
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
        <div className="grid-x grid-padding-x align-center submit-button">
          <fieldset className="cell">
            <button className="button small expanded" type="submit" value="Submit">送出</button>
          </fieldset>
        </div>
      </div>
    </form>
  )
};

export default choosePanel;