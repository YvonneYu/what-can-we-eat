import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';

class choosePanelBuilder extends Component {

  state = {
    priceValues: [
      {
        label: '便宜',
        checked: false
      },
      {
        label: '還可以',
        checked: false
      },
      {
        label: '貴',
        checked: false
      }
    ]
  };

  onSelectorChange = (targetIndex) => {
    let newValues = this.state.priceValues.map((value, i) => {
        return targetIndex !== i ? value: {...value, checked: !value.checked};
    });
    this.setState( { priceValues: newValues });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render () {
    return <ChoosePanel
      {...this.state}
      onSubmit={ this.handleSubmit}
      onSelect={ this.onSelectorChange }
    ></ChoosePanel>;
  }

}

export default choosePanelBuilder;