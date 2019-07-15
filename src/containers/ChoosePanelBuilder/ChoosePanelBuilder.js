import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';
import RestChoiceData from '../../utils/RestChoicesData';

class choosePanelBuilder extends Component {

  state = {
    choices: RestChoiceData.getChoiceData(),
    resInfo: {
      name: '',
      tel:'',
      address:''
    }
  };

  onChoiceSelectorChange = (targetType, targetIndex) => {
    const newChoices = this.state.choices.map((choice) => {
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
    this.setState( { choices: newChoices });
  };

  onInfoChange = (event, inputName) => {
     let newResInfo = {...this.state.resInfo};
      newResInfo[inputName] = event.target.value;
    this.setState( { resInfo: newResInfo });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
        <div className="main-selector-panel">
          <ChoosePanel
            {...this.state}
            onSubmit={this.handleSubmit}
            onInfoChange={ this.onInfoChange }
            onSelectorChange={this.onChoiceSelectorChange}>
          </ChoosePanel>
        </div>
      );
  }
}

export default choosePanelBuilder;