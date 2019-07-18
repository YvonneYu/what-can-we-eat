import React, { Component } from 'react';
import ChoicesSectionBuilder from '../ChoicesPanelBuilder/ChoicesSectionBuilder';
import '../ChoicesPanelBuilder/ChoicesPanelBuilder.scss';
import {connect} from 'react-redux';
import ChoicesSubmitInput from '../../components/ChoicesPanel/ChoicesSubmitInput';
import * as actions from '../../actions/actions';
import {choicesHelper} from "../../utils/utils";
import RestaurantsBuilder from '../RestaurantsBuilder/RestaurantsBuilder';
import {getRestListIfNeed} from "../../actions/actions";

class findPanelBuilder extends Component {

  componentWillMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.filterListByChoice(choicesHelper.getCheckedChoices(this.props.choices));
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            隨便選三個：
            <div>
              <RestaurantsBuilder />
            </div>
          </div>
          <div>或是選擇中塞選：</div>
          <div className="main-selector-panel">
            <ChoicesSectionBuilder />
            <ChoicesSubmitInput />
          </div>
        </form>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  choices: state.choicesPanel.choices
});

const mapDispatchToProps = (dispatch) => ({
  filterListByChoice: (choices) => {
    dispatch(actions.filterRestList(choices))
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(findPanelBuilder);