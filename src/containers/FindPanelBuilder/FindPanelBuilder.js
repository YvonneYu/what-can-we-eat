import React, { Component } from 'react';
import ChoicesSectionBuilder from '../ChoicesPanelBuilder/ChoicesSectionBuilder';
import '../ChoicesPanelBuilder/ChoicesPanelBuilder.scss';
import { connect } from 'react-redux';
import ChoicesSubmitInput from '../../components/ChoicesPanel/ChoicesSubmitInput';
import * as actions from '../../actions/actions';
import { choicesHelper } from '../../utils/utils';
import RestaurantsBuilder from '../RestaurantsBuilder/RestaurantsBuilder';
import { getRestListIfNeed } from "../../actions/actions";

class findPanelBuilder extends Component {

  componentWillMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.filterRestList(choicesHelper.getCheckedChoices(this.props.choices)));
    this.props.dispatch(actions.resetChoices());
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            隨便挑三個給你：
            <div>
              <RestaurantsBuilder displayNum={3} />
            </div>
          </div>
          <div>或是在下面塞選相關：（無選擇=再隨機選三個）</div>
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
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(findPanelBuilder);