import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';
import './ChoosePanelBuilder.scss';

class choosePanelBuilder extends Component {

  state = {
    res_prices: [
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
    ],
    // 中式、火鍋、西式、日式、異國料理、便當、麵店、速食、素食、小吃、早餐店、垃圾食物
    res_types: [
      {
        label: '中式',
        checked: false
      },
      {
        label: '西式',
        checked: false
      },
      {
        label: '日式',
        checked: false
      },
      {
        label: '異國料理',
        checked: false
      },
      {
        label: '便當',
        checked: false
      },
      {
        label: '麵店',
        checked: false
      },
      {
        label: '火鍋',
        checked: false
      },
      {
        label: '速食',
        checked: false
      },
      {
        label: '素食',
        checked: false
      },
      {
        label: '早餐',
        checked: false
      },
      {
        label: '垃圾食物',
        checked: false
      },

    ]
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