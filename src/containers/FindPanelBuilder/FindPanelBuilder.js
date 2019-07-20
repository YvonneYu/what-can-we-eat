import React, { Component } from 'react';
import ChoicesSectionBuilder from '../ChoicesPanelBuilder/ChoicesSectionBuilder';
import '../ChoicesPanelBuilder/ChoicesPanelBuilder.scss';
import { connect } from 'react-redux';
import ChoicesSubmitInput from '../../components/ChoicesPanel/ChoicesSubmitInput';
import * as actions from '../../actions/actions';
import {choicesHelper, getRandomIntList} from '../../utils/utils';
import Restaurants from '../../components/Restaurants/Restaurants';
import { getRestListIfNeed } from '../../actions/actions';
import { deleteRest } from '../../actions/actions';

class findPanelBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {isSelectRest: false, selectedList: []};
  }

  componentWillMount() {
    this.props.dispatch(getRestListIfNeed());
  }

  componentWillReceiveProps() {
    this.setState({ selectedList:  this.randomSelectRest()});
  }

  randomSelectRest(displayNumber=3) {
    let len = this.props.restList.length;
    let list = this.props.restList;
    // 如果沒有指定要顯示幾筆，或是 list 長度比少指定長度小，直接回傳 list
    if (!displayNumber || len <= displayNumber) return list;

    return getRandomIntList(displayNumber,len).map((index) => {
      return list[index];
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let choices = choicesHelper.getCheckedChoices(this.props.choices);
    if (choices.length !== 0) {
      this.props.dispatch(actions.filterRestList(choices));
      this.props.dispatch(actions.resetChoices());
      this.setState({isSelectRest: true});
    } else {
      this.setState({ selectedList:  this.randomSelectRest()});
    }
    // scroll to top
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <span>{ this.state.isSelectRest ? '篩選結果':'隨便挑三個給你' }：</span>
            <div>
              {
                this.state.selectedList.length ?
                  <Restaurants restList={ this.state.selectedList } handleRestDelete={ this.props.handleRestDelete } />
                  : <p> { this.state.isSelectRest ? "不好意思，無篩選結果喔！" : "看來沒有任何餐廳耶，快去新增吧！" }</p>
              }
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
  handleRestDelete: (id) => {
    dispatch(deleteRest(id));
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(findPanelBuilder);