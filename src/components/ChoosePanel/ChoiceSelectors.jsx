import React from 'react';
import './ChoosePanel.scss';
import PropTypes from "prop-types";

const ChoiceSelectors  = ({list=[], label=''}) => {
  let selectorInputCom = list.map( (value, index) => {
    let id = 'checkbox'+ index;
    return (
      <React.Fragment key={index}>
        <input id={ id } type="checkbox"
               checked={ value.checked } onChange={ () => {} } />
        <label className="button" htmlFor={ id } >{ value.label }</label>
      </React.Fragment>
    )
  });

  return (
    <div className="grid-x grid-padding-x panel-select">
      <fieldset className="cell">{ label }
        { selectorInputCom }
      </fieldset>
    </div>
  )
};

ChoiceSelectors.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string
};

export default ChoiceSelectors;