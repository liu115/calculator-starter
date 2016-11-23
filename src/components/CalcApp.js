import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      right: 'empty',
      op: '',
    };
    this.numberHandleClick = this.numberHandleClick.bind(this);
    this.operatorHandleClick = this.operatorHandleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  numberHandleClick(e) {
    const digit = e;
    if (this.state.op === '') {
      this.state.left = (this.state.left * 10) + parseInt(digit, 10);
    } else {
      if (this.state.right === 'empty') this.state.right = 0;
      this.state.right = (this.state.right * 10) + parseInt(digit, 10);
    }
    this.setState({
      left: this.state.left,
      right: this.state.right,
    });
  }
  operatorHandleClick(e) {
    const op = e;
    if (this.state.op === '') {
      this.setState({ op: (op === '=') ? '' : op });
      return true;
    }
    if (this.state.right === 'empty') {
      this.setState({ op: (op === '=') ? '' : op });
      return true;
    }
    switch (this.state.op) {
      case '+':
        this.state.left = this.state.left + this.state.right;
        break;
      case '-':
        this.state.left = this.state.left - this.state.right;
        break;
      case 'x':
        this.state.left = this.state.left * this.state.right;
        break;
      case '÷':
        this.state.left = this.state.left / this.state.right;
        break;
      // default:
      //   break;
    }
    this.setState({
      left: this.state.left,
      right: 'empty',
      op: (op === '=') ? '' : op,
    });
    return true;
  }

  resetState() {
    // TODO
    this.setState({
      left: 0,
      right: 'empty',
      op: '',
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{(this.state.right === 'empty') ? this.state.left : this.state.right}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.operatorHandleClick}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.operatorHandleClick}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.operatorHandleClick}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.numberHandleClick}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.operatorHandleClick}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number calc-double-btn"
              onClick={this.numberHandleClick}
            >
              0
            </CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.showNotImplemented}
            >
              .
            </CalcButton>
            <CalcButton className="calc-operator" onClick={this.operatorHandleClick}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
