import React, { Component } from 'react';
import {connect} from "react-redux";
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import * as actions from "../../actions/actions";
import './ChoosePanelBuilder.scss';

class choosePanelBuilder extends Component {

  // 當選擇面板的按鈕被點擊
  handleChoiceSelectorChange = (targetType, targetIndex) => {
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

  // 當三個餐廳 Inputs 被點擊
  handleInfoChange = (event, inputKey) => {
    let newRestInfo = {...this.props.restInfo};
    let newValue = event.target.value;
    let isValid = this.validateInput(newValue, newRestInfo[inputKey]);
    newRestInfo[inputKey] = { ...newRestInfo[inputKey], value: newValue, isValid: isValid};
    this.props.setRestInfo(newRestInfo);
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

  // get service like object for choices
  getCheckedChoices = () => {
    // get data structure like ['心情', '天氣熱']
    return this.props.choices.reduce( (checkedList, choices) => {
      let result = choices.data.filter((choice) => {
        // find checked object
        return choice.checked;
      }).reduce((accList, obj) => {
        // reduce to one single label
        return [...accList, obj.label];
      },[]);
      // concat all for choices type
      return [...checkedList, ...result];
    }, []);
  };

  // 檢查全部的 valid state, 如果有 Invalid 情形，return false
  isValidToSubmit = () => {
    return Object.keys(this.props.restInfo).reduce((isAllValid, key)=> {
      return this.props.restInfo[key].isValid && isAllValid;
    }, true);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.isValidToSubmit()) {
      alert('資料有誤！不能新增！');
      return;
    }
    let newRest = {
      name: this.props.restInfo.name.value,
      tel: this.props.restInfo.tel.value,
      address: this.props.restInfo.address.value,
      choices: this.getCheckedChoices()
    };
    if (this.props.isEditMode) {
      // pass id
      this.props.handleEditRest(this.props.restId, newRest);
    } else {
      // in creation mode
      this.props.handleCreateRest(newRest);
    }
    //reset all panel choices deeply
    this.props.resetChoicesAndRestInfo();
  };

  render() {
    return (
        <div className="main-selector-panel">
          <ChoosePanel
            choices={ this.props.choices}
            restInfo={ this.props.restInfo }
            isEditMode={ this.props.isEditMode }
            isValidToSubmit={ this.isValidToSubmit() }
            onSubmit={this.handleSubmit}
            onInfoChange={ this.handleInfoChange }
            onSelectorChange={ this.handleChoiceSelectorChange }>
          </ChoosePanel>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  choices: state.choicesPanel.choices,
  restInfo: state.choicesPanel.restInfo,
  isEditMode: state.choicesPanel.isEditMode,
  restId: state.choicesPanel.id
});

const mapDispatchToProps = (dispatch) => ({
  handleCreateRest: (rest) => {
    dispatch(actions.addRest(rest))
  },
  handleEditRest: (id, rest) => {
    dispatch(actions.editRest(id, rest))
  },
  setChoices: (choices) => {
    dispatch(actions.setChoices(choices));
  },
  setRestInfo: (restInfo) => {
    dispatch(actions.setRestInputValues(restInfo));
  },
  resetChoicesAndRestInfo: () => {
    dispatch(actions.resetChoices())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(choosePanelBuilder);