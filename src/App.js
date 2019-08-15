import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  state = {
    input: ""
  };

  handleClick = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: eval(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.handleClick}>7</Button>
            <Button handleClick={this.handleClick}>8</Button>
            <Button handleClick={this.handleClick}>9</Button>
            <Button handleClick={this.handleClick}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>4</Button>
            <Button handleClick={this.handleClick}>5</Button>
            <Button handleClick={this.handleClick}>6</Button>
            <Button handleClick={this.handleClick}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>1</Button>
            <Button handleClick={this.handleClick}>2</Button>
            <Button handleClick={this.handleClick}>3</Button>
            <Button handleClick={this.handleClick}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>.</Button>
            <Button handleClick={this.handleClick}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.handleClick}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
