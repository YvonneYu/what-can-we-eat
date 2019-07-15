import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';
import RestChoiceData from '../../utils/RestChoicesData';

class choosePanelBuilder extends Component {

  state = {
    choices: RestChoiceData.getChoiceData()
  };

  onChoiceSelectorChange = (targetIndex) => {
    let newValues = this.state.res_prices.data.map((value, i) => {
        return targetIndex !== i ? value: {...value, checked: !value.checked};
    });
    let newPrices = RestChoiceData.getPrices();
    newPrices.data = newValues;
    this.setState( { res_prices: newPrices });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
        <div className="main-selector-panel">
          <ChoosePanel
            {...this.state}
            onSubmit={this.handleSubmit}
            onSelect={this.onChoiceSelectorChange}
          ></ChoosePanel>
        </div>
      );
  }
}

export default choosePanelBuilder;