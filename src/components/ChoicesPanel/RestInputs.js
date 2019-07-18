import React from 'react';
import ChoicesPanelRestInput from "./ChoicesPanelRestInput";

const restInputs = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      {
        Object.keys(props.restInfo).map((key, index) => {
          let resInput = {...props.restInfo[key], id: key};
          return (
            <ChoicesPanelRestInput
              key={ index } {...resInput}
              onChange={ props.onChange }>
            </ChoicesPanelRestInput>)
        })
      }
    </div>
  )
};

export default restInputs;