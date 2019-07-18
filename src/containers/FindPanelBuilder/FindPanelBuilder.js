import React, { Component } from 'react';
import ChoicesPanel from "../../components/ChoicesPanel/ChoicesPanel";

class findPanelBuilder extends Component {

  render() {
    return (
      <div className="main-selector-panel">
        <ChoicesPanel
          choices={this.props.choices}
          restInfo={this.props.restInfo}
          isEditMode={this.props.isEditMode}
          isValidToSubmit={this.isValidToSubmit()}
          onSubmit={this.handleSubmit}
          onInfoChange={this.handleInfoChange}
          onSelectorChange={this.handleChoiceSelectorChange}>
        </ChoicesPanel>
      </div>
    )
  };
}

export default findPanelBuilder;