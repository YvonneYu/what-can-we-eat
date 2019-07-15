import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';
import RestChoiceData from '../../utils/RestChoicesData';

class choosePanelBuilder extends Component {

  state = {
    res_prices: RestChoiceData.getPrices()
  };

  onSelectorChange = (targetIndex) => {
    let newValues = this.state.res_prices.map((value, i) => {
        return targetIndex !== i ? value: {...value, checked: !value.checked};
    });
    this.setState( { res_prices: newValues });
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
            onSelect={this.onSelectorChange}
          ></ChoosePanel>
        </div>
      );
  }
}

export default choosePanelBuilder;