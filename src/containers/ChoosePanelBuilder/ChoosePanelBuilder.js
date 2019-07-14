import React, { Component } from 'react';
import ChoosePanel from '../../components/ChoosePanel/ChoosePanel';

class choosePanelBuilder extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render () {
    return <ChoosePanel onSubmit={ this.handleSubmit }></ChoosePanel>;
  }

}

export default choosePanelBuilder;