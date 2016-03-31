import React, { Component } from 'react';

var Model = {
  email: 'test1@test.com',
  isSoftphone: true,
  isActionInProgress: false,

  completeTransfer: function(e) {
    console.log('completeTransfer', e);
    alert('Complete Transfer [' + this.email + ']');
  },
  cancelTransfer: function(e) {
    console.log('cancelTransfer', e);
    alert('Cancel Transfer [' + this.email + ']');
  }
};

var KeypadPanel = React.createClass({
  getInitialState: function() {
    return {
      showKeypad: false
    };
  },
  onShowKeypadClicked: function(e) {
    this.setState({'showKeypad': !this.state.showKeypad});
  },
  render: function() {
    var data = this.props.model;
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

var fieldSetStyle = {
    border:'1px #288dc1 solid',
    borderRadius: '5px',
    margin:'20px auto',
    width:'250px',
    position:'relative',
    paddingBottom:'10px',
    row: {
      paddingBottom: '5px'
    }
};
var legendStyle = {
  width: 'auto',
  borderBottom: '0',
  fontSize: '14px',
  paddingLeft: '5px',
  paddingRight: '5px'
};

var buttonIcon = {
  paddingRight: '5px'
};

var CallControlsWarmTransfer = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {},
  componentWillUnmount: function() {},
  render: function() {
    var data = this.props.model;
    return (
      <div>
        <fieldset style={fieldSetStyle}>
          <legend style={legendStyle}>Warm Transfer</legend>
          <div className="row group-separator-container">
            <span>{data.email}</span>
          </div>
          <hr />
          <If condition={data.isSoftphone}>
            <KeypadPanel model={data} />
          </If>
          <div style={fieldSetStyle.row} className="row">
            {/* commented out */}
            <button onClick={data.completeTransfer.bind(data)} className="btn f9-blue-btn">
              <i style={buttonIcon} className="fa fa-phone"></i>
              Complete Transfer
            </button>
          </div>
          <div className="row">
            <button onClick={data.cancelTransfer.bind(data)}>Cancel Transfer</button>
          </div>
        </fieldset>
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
