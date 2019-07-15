import React from 'react';
import ChoiceSelectors from './ChoiceSelectors';
import RestaurantInputs from './RestaurantInputs';
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

  return (
    <form onSubmit={ props.onSubmit }>
      <RestaurantInputs></RestaurantInputs>
      { selectorsItems }
      <div>
        <input type="submit" value="送出" />
      </div>
    </form>
  )
};

export default choosePanel;