import React from 'react';
import './ChoicesPanel.scss';

const choicesPanelRestInput = (props) => {
  let labelName = 'res_' + props.id;
  return (
    <div className="cell">
      <label htmlFor={ labelName }>{ props.label }
        { props.isValid ? null : <span className="form-error show">{ props.inputProps.errorMessage }</span> }
      </label>
      <input type={ props.inputProps.type }
             name={ labelName } id={ labelName } value={ props.value }
             onChange={ (event) => props.onChange(event, props.id) }
             placeholder={props.inputProps.placeholder} />
    </div>
   )
};

export default choicesPanelRestInput;