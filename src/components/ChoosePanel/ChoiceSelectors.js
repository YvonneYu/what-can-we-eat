import React from 'react';
import './ChoosePanel.scss';
import PropTypes from "prop-types";

const ChoiceSelectors  = (props) => {

  let selectorInputCom = props.list.map( (value, index) => {
    let id = props.type + '_checkbox_'+ index;
    return (
      <React.Fragment key={index}>
        <input id={ id } type="checkbox"
               checked={ value.checked }
               onChange={ () => props.onChange(props.type, index) } />
        <label className="button" htmlFor={ id } >{ value.label }</label>
      </React.Fragment>
    )
  });

  return (
    <div className="grid-x grid-padding-x panel-select">
      <fieldset className="cell">{ props.label }
        { selectorInputCom }
      </fieldset>
    </div>
  )
};

ChoiceSelectors.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default ChoiceSelectors;