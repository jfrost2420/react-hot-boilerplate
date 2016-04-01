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
          <button onClick={this.onShowKeypadClicked} style={button} className="btn f9-btn-default f9-btn-centered">
            <i style={buttonIcon} className="fa fa-th"></i>
            Show Keypad
          </button>
        </div>
        <If condition={this.state.showKeypad}>
          <div className="row">
            <div className="dial-pad">
              <p>
                <button value="1">1<small></small></button>
                <button value="2">2<small>abc</small></button>
                <button value="3">3<small>def</small></button>
              </p>
              <p>
                <button value="4">4<small>ghi</small></button>
                <button value="5">5<small>jkl</small></button>
                <button value="6">6<small>mno</small></button>
              </p>
              <p>
                <button value="7">7<small>pqrs</small></button>
                <button value="8">8<small>tuv</small></button>
                <button value="9">9<small>wxyz</small></button>
              </p>
              <p>
                <button value="*">*<small></small></button>
                <button value="0">0<small>+</small></button>
                <button value="#">#<small></small></button>
              </p>
              <input className="dial-pad-history" type="text" readonly />
            </div>
          </div>
        </If>
        <hr style={hrStyle} />
      </div>
    );
  }
});

var fieldSetStyle = {
    border:'2px #288dc1 solid',
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
  color: '#929aa0',
  width: 'auto',
  borderBottom: '0',
  fontSize: '12px',
  paddingLeft: '5px',
  paddingRight: '5px',
  marginBottom: '0px',
  fontWeight: '300'
};

var buttonIcon = {
  paddingRight: '5px'
};

var button = {
  textTransform: 'none',
  width: '80%'
};

var buttonTransfer = {
  textTransform: 'none',
  width: '80%',
  height: '45px'
};

var hrStyle = {
  marginTop: '15px',
  marginBottom: '15px',
  borderTop: '1px solid #d0d3d4',
  width: '90%'
};

var emailStyle = {
  fontSize: '18px',
  color: '#2e3438',
  fontWeight: '300'
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
            <span style={emailStyle}>{data.email}</span>
          </div>
          <hr style={hrStyle} />
          <If condition={data.isSoftphone}>
            <KeypadPanel model={data} />
          </If>
          <div style={fieldSetStyle.row} className="row">
            {/* commented out */}
            <button onClick={data.completeTransfer.bind(data)} style={buttonTransfer} className="btn f9-blue-btn">
              <i style={buttonIcon} className="fa fa-check"></i>
              Complete Transfer
            </button>
          </div>
          <div className="row">
            <button onClick={data.cancelTransfer.bind(data)} style={button} className="btn f9-btn-default f9-btn-centered">Cancel Transfer</button>
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
