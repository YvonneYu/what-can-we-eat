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
        label: '*名稱',
        type: 'text',
        placeholder: '請輸入餐廳名稱...',
        errorMessage: '此欄位為必填',
        isValid: true,
        isRequired: true
      },
      tel: {
        value: '',
        label: '電話',
        type: 'tel',
        placeholder: '請輸入餐廳電話...',
        errorMessage: '此欄位必須為數字',
        isValid: true,
        isRequired: false
      },
      address: {
        value: '',
        label: '地址',
        type: 'text',
        placeholder: '請輸入餐廳地址...',
        isValid: true,
        isRequired: false
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

  validateInput = (value, rules) => {
    let isValid = true;
    // trim empty space
    let trimValue = value.trim();
    // 檢查是否 required
    if (rules.isRequired) {
        isValid = trimValue !== '';
    }
    // 簡單檢查 tel input 是否是 number
    if (rules.type === 'tel') {
        isValid = !isNaN(parseFloat(trimValue)) && isFinite(trimValue);
    }
    return isValid;
  };

  onInfoChange = (event, inputKey) => {
     let newResInfo = {...this.state.resInfo};
     let newValue = event.target.value;
     let isValid = this.validateInput(newValue, newResInfo[inputKey]);
     newResInfo[inputKey] = { ...newResInfo[inputKey], value: newValue, isValid: isValid};
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