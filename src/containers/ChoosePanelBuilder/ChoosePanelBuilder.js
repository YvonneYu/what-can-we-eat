import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';
import restChoices from '../../util/restChoices.json';

class choosePanelBuilder extends Component {

  state = {
    res_prices: []
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
    console.log('restChoices', restChoices);
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