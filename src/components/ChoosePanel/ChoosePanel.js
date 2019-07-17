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

  return (
    <form onSubmit={ props.onSubmit }>
      <div className="grid-x grid-padding-x">
          {
            Object.keys(props.restInfo).map((key, index) => {
              let resInput = {...props.restInfo[key], id: key};
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
            <button className="button small expanded"
                    type="submit" value="Submit"
                    disabled={ !props.isValidToSubmit }>送出</button>
          </fieldset>
        </div>
      </div>
    </form>
  )
};

export default choosePanel;