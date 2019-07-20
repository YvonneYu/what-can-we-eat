import React from 'react';
import PropTypes from 'prop-types';
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

choicesPanelRestInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  inputProps: {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string
  }
};

choicesPanelRestInput.defaultProps = {
  value: '',
  isValid: true,
  onChange: () => {},
  inputProps: {
    type: '',
    placeholder: '',
    errorMessage: ''
  }
};

export default choicesPanelRestInput;