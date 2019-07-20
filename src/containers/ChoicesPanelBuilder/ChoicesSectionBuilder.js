import React, { Component } from 'react';
import ChoiceSelectors from '../../components/ChoicesPanel/ChoiceSelectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from "../../actions/actions";

class choicesSectionBuilder extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
    // 當選擇面板的按鈕被點擊
  handleChange(targetType, targetIndex) {
    const newChoices = this.props.choices.map((choice) => {
      // find target choice by type
      if ( choice.type === targetType ) {
        // update data by targetIndex, if not target, return original value
        let newChoiceData = choice.data.map( (value, i) => {
          return targetIndex !== i ? value: {...value, checked: !value.checked};
        });
        return {...choice, data: newChoiceData};
      }
      // not target choice, return original one
      return choice;
    });
    this.props.setChoices(newChoices);
  };

  render() {
    return (
      <div>
        {
          this.props.choices.map((choice, index) => {
            return <ChoiceSelectors key={ index }
                                    type={ choice.type }
                                    list={ choice.data }
                                    onChange={ this.handleChange }
                                    label={ choice.label }>
            </ChoiceSelectors>;
          })
        }
      </div>
    )
  }
}

choicesSectionBuilder.propTypes = {
  choices: PropTypes.array
};

choicesSectionBuilder.defaultProps = {
  choices: []
};

const mapStateToProps = state => ({
  choices: state.choicesPanel.choices
});

const mapDispatchToProps = (dispatch) => ({
  setChoices: (choices) => {
    dispatch(actions.setChoices(choices));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(choicesSectionBuilder);