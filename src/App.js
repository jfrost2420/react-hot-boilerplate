import React, { Component } from 'react';

var Model = {
  name: 'test@test.com',
  isSoftphone: true,
  isActionInProgress: false,

  onCompleteTransferClicked: function(e) {
    console.log('onCompleteTransferClicked', e);
    alert('Complete Transfer [' + this.name + ']');
  },
  onCancelTransferClicked: function(e) {
    console.log('onCancelTransferClicked', e);
    alert('Cancel Transfer [' + this.name + ']');
  }
};

var KeypadPanel = React.createClass({
  getInitialState: function() {
    return {
      showKeypad: true
    };
  },
  onShowKeypadClicked: function(e) {
    this.setState({'showKeypad': !this.state.showKeypad});
  },
  render: function() {
var model = this.props.model;
    return (
<div>
  <div className="row">
    <button onClick={this.onShowKeypadClicked}>Show Keypad</button>
  </div>
  <If condition={this.state.showKeypad}>
    <div className="row">KEYPAD</div>
  </If>
  <hr />
</div>
    );
  }
});

var CallControlsWarmTransfer = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {},
  componentWillUnmount: function() {},
  render: function() {
var model = this.props.model;
  return (
<div>
  <div className="row group-separator-container">
    <div className="group-separator-title">
      <span>{model.name}</span>
    </div>
  </div>
  <hr />
  <div className="row group-separator-container">
    <div className="group-separator-title">
      <span>Warm Transfer</span>
    </div>
  </div>
  <If condition={model.isSoftphone}>
    <KeypadPanel model={model} />
  </If>
  <div className="row">
{/* commented out */}
    <button onClick={model.onCompleteTransferClicked.bind(model)}>Complete Transfer</button>
  </div>
  <div className="row">
    <button onClick={model.onCancelTransferClicked.bind(model)}>Cancel Transfer</button>
  </div>
</div>
    );
  }
});


export default class App extends Component {
  render() {
    return (
      <CallControlsWarmTransfer model={Model} />
    );
  }
}
