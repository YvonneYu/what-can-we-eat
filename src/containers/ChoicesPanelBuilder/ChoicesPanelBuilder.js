import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChoicesSectionBuilder from './ChoicesSectionBuilder';
import RestInputs from '../../components/ChoicesPanel/RestInputs';
import ChoicesSubmitInput from '../../components/ChoicesPanel/ChoicesSubmitInput';
import * as actions from "../../actions/actions";
import { choicesHelper } from "../../utils/utils";
import './ChoicesPanelBuilder.scss';

class choicesPanelBuilder extends Component {

  constructor(props) {
    super(props);

    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.isValidToSubmit = this.isValidToSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // if edit, get rest from server first
    if (this.props.match.params.id) {
      this.props.dispatch(actions.findRestInServer(this.props.match.params.id));
    }
  }

  handleInfoChange(event, inputKey) {
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

  // 檢查全部的 valid state, 如果有 Invalid 情形，return false
  isValidToSubmit() {
    return Object.keys(this.props.restInfo).reduce((isAllValid, key)=> {
      return this.props.restInfo[key].isValid && isAllValid;
    }, true);
  };

  handleSubmit(e) {
    e.preventDefault();
    if (!this.isValidToSubmit()) {
      alert('資料有誤！不能新增！');
      return;
    }
    let newRest = {
      name: this.props.restInfo.name.value,
      tel: this.props.restInfo.tel.value,
      address: this.props.restInfo.address.value,
      choices: choicesHelper.getCheckedChoices(this.props.choices)
    };
    // edit mode
    if (this.props.match.params.id) {
      // pass id
      this.props.handleEditRest(this.props.match.params.id, newRest, this.props.history);
    } else {
      // in creation mode
      this.props.handleCreateRest(newRest, this.props.history);
    }
    //reset all panel choices deeply
    this.props.resetChoicesAndRestInfo();
  };

  render() {
    return (
        <div className="main-selector-panel">
          <form onSubmit={ (e) => this.handleSubmit(e) }>
            <RestInputs restInfo={this.props.restInfo} onChange={ this.handleInfoChange } />
            <ChoicesSectionBuilder />
            <ChoicesSubmitInput disabled={ !this.isValidToSubmit() } />
          </form>
        </div>
      );
  }
}

choicesPanelBuilder.propTypes = {
  choices: PropTypes.array,
  restInfo: PropTypes.object
};

choicesPanelBuilder.defaultProps = {
  choices: [],
  restInfo: {}
};

const mapStateToProps = state => ({
  choices: state.choicesPanel.choices,
  restInfo: state.choicesPanel.restInfo
});

const mapDispatchToProps = (dispatch) => ({
  // pass router history make sure change page after all async call
  handleCreateRest: (rest, history) => {
    dispatch(actions.addRest(rest, history))
  },
  handleEditRest: (id, rest, history) => {
    dispatch(actions.editRest(id, rest, history))
  },
  setRestInfo: (restInfo) => {
    dispatch(actions.setRestInputValues(restInfo));
  },
  resetChoicesAndRestInfo: () => {
    dispatch(actions.resetChoices())
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(choicesPanelBuilder);