import React, { Component } from 'react';
import ChoicesSectionBuilder from '../ChoicesPanelBuilder/ChoicesSectionBuilder';
import '../ChoicesPanelBuilder/ChoicesPanelBuilder.scss';
import { connect } from 'react-redux';
import ChoicesSubmitInput from '../../components/ChoicesPanel/ChoicesSubmitInput';
import * as actions from '../../actions/actions';
import {choicesHelper, getRandomIntList} from '../../utils/utils';
import RestaurantsBuilder from '../RestaurantsBuilder/RestaurantsBuilder';
import { getRestListIfNeed } from "../../actions/actions";

class findPanelBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {isSelectRest: false, restId: Math.random()};
  }

  componentWillMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let choices = choicesHelper.getCheckedChoices(this.props.choices);
    if (choices.length !== 0) {
      this.props.dispatch(actions.filterRestList(choices));
      this.props.dispatch(actions.resetChoices());
      this.setState({isSelectRest: true});
    } else {
      // force rerender 髒髒！
      this.setState({isSelectRest: false, restId: Math.random()});
    }
    // scroll to top
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <span>{ this.state.isSelectRest ? '篩選結果':'隨便挑三個給你'}：</span>
            <div>
              <RestaurantsBuilder displayNum={3} id={this.state.restId}/>
            </div>
          </div>
          <div>或是在下面篩選：（無篩選=隨機再選擇）</div>
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
  restList: state.restaurantList.restList,
  choices: state.choicesPanel.choices
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(findPanelBuilder);