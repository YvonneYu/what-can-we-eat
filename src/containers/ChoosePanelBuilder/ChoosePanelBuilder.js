import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';
import RestChoiceData from '../../utils/RestChoicesData';
import { addRest } from "../../actions/actions";
import {connect} from "react-redux";

class choosePanelBuilder extends Component {

  state = {
    choices: RestChoiceData.getChoiceData(),
    resInfo: {
      name: {
        value: '',
        label: '*名稱',
        inputProps: {
          type: 'text',
          placeholder: '請輸入餐廳名稱...',
          errorMessage: '此欄位為必填'
        },
        isValid: false,
        isRequired: true,
        showInCreationMode: true
      },
      tel: {
        value: '',
        label: '電話',
        inputProps: {
          type: 'tel',
          placeholder: '請輸入餐廳電話...',
          errorMessage: '此欄位必須為數字'
        },
        isValid: true,
        isRequired: false,
        showInCreationMode: false
      },
      address: {
        value: '',
        label: '地址',
        inputProps: {
          type: 'text',
          placeholder: '請輸入餐廳地址...'
        },
        isValid: true,
        isRequired: false,
        showInCreationMode: false
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
    if (rules.inputProps.type === 'tel') {
        isValid = (!isNaN(parseFloat(trimValue)) && isFinite(trimValue)) || (trimValue === '');
    }
    return isValid;
  };

  isValidToCreate = () => {
    let isAllValid = true;
    for (let type in this.state.resInfo ) {
      isAllValid = this.state.resInfo[type].isValid && isAllValid;
    }
    return isAllValid;
  };

  onInfoChange = (event, inputKey) => {
     let newResInfo = {...this.state.resInfo};
     let newValue = event.target.value;
     let isValid = this.validateInput(newValue, newResInfo[inputKey]);
     newResInfo[inputKey] = { ...newResInfo[inputKey], value: newValue, isValid: isValid};
     this.setState( { resInfo: newResInfo });
  };

  getCheckedChoices = () => {
    // get data structure like ['心情', '天氣熱']
    return this.state.choices.reduce( (checkedList, choices) => {
      // concat all for choices type
      return checkedList.concat(choices.data.filter((choice) => {
              // find checked object
              return choice.checked;
          }).reduce((list, obj) => {
            // reduce to one single label
            return obj.label;
          },[]))
    }, []);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.isValidToCreate()) {
      alert('資料有誤！不能新增！');
      return;
    }
    let newRest = {
      name: this.state.resInfo.name.value,
      tel: this.state.resInfo.tel.value,
      address: this.state.resInfo.address.value,
      choices: this.getCheckedChoices()
    };
    this.props.handleCreateRest(newRest);
    this.setState( { choices: RestChoiceData.getChoiceData() });
  };

  render() {
    return (
        <div className="main-selector-panel">
          <ChoosePanel
            {...this.state}
            isCreationMode={false}
            onSubmit={this.handleSubmit}
            onInfoChange={ this.onInfoChange }
            onSelectorChange={this.onChoiceSelectorChange}>
          </ChoosePanel>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleCreateRest: (rest) => {
    dispatch(addRest(rest))
  }
});

export default connect(null, mapDispatchToProps)(choosePanelBuilder);