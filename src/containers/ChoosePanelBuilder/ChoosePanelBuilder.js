import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';
import RestChoiceData from '../../utils/RestChoicesData';

class choosePanelBuilder extends Component {

  state = {
    choices: RestChoiceData.getChoiceData(),
    resInfo: {
      name: {
        value: '',
        label: '名稱',
        type: 'text',
        placeholder: '請輸入餐廳名稱...',
        isValid: true,
        isRequired: true
      },
      tel: {
        value: '',
        label: '電話',
        type: 'tel',
        placeholder: '請輸入餐廳電話...',
        isValid: true,
        isRequired: true
      },
      address: {
        value: '',
        label: '地址',
        type: 'text',
        placeholder: '請輸入餐廳地址...',
        isValid: true,
        isRequired: true
      }
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

  onInfoChange = (event, inputKey) => {
     let newResInfo = {...this.state.resInfo};
     newResInfo[inputKey] = { ...newResInfo[inputKey], value: event.target.value};
     this.setState( { resInfo: newResInfo });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.resInfo);
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