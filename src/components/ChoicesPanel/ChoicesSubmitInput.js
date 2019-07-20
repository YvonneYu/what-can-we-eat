import React from 'react';
import PropTypes from 'prop-types';

const choicesSubmitInput = (props) => {
  return (
    <div className="grid-x grid-padding-x align-center submit-button">
      <fieldset className="cell">
        <button
          className="button small expanded"
          type="submit" value="Submit"
          onClick={ () => { props.onClick && props.onClick() } }
          disabled={ props.disabled }>送出</button>
      </fieldset>
    </div>
  )
};

choicesSubmitInput.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

choicesSubmitInput.defaultProps = {
  onClick: () => {},
  disabled: false
};

export default choicesSubmitInput;