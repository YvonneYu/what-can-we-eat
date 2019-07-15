import React from 'react';
import './ChoosePanel.scss';

const restaurantInput = (props) => {
  let labelName = 'res_' + props.id;
  return (
    <div className="cell">
      <label htmlFor={ labelName }>{ props.label }</label>
      <input type={ props.type } name={ labelName } id={ labelName } value={ props.value }
             onChange={ (event) => props.onChange(event, props.id) }
             placeholder={props.placeholder} />
    </div>
    )
};

export default restaurantInput;