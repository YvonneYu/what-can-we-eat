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

  constructor(props) {
    super(props);
    this.state = {isSelectRest: false};
  }

  componentWillMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.filterRestList(choicesHelper.getCheckedChoices(this.props.choices)));
    this.props.dispatch(actions.resetChoices());
    // scroll to top
    window.scrollTo(0, 0);
    this.setState({isSelectRest: true})
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <span>{ this.state.isSelectRest ? '篩選結果':'隨便挑三個給你'}：</span>
            <div>
              <RestaurantsBuilder displayNum={3} />
            </div>
          </div>
          <div>或是在下面篩選：</div>
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