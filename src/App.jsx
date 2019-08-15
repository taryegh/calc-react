import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import ClearButton from "./components/ClearButton";
import * as mat from "mathjs";
import Beta from "./components/Beta";

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

  handleSQRT = () => {
    this.setState({ input: Math.sqrt(+this.state.input) });
  };

  handlePercent = () => {
    this.setState({ input: +this.state.input / 100 });
  };

  handleNone = () => {
    console.log(null);
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <Label />
          <div className="row">
            {/* MINUS */}
            <Button handleClick={this.handleClick} value="-">
              +-
            </Button>

            {/* SQRT */}
            <Button handleClick={this.handleSQRT}>√</Button>

            {/* MU */}
            <Button handleClick={this.handleNone}>MU</Button>

            {/* % */}
            <Button handleClick={this.handlePercent}>%</Button>

            {/* ON */}
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              ON
            </ClearButton>
          </div>

          <div className="row">
            <Button handleClick={this.handleClick} value="7">
              7
            </Button>
            <Button handleClick={this.handleClick} value="8">
              8
            </Button>
            <Button handleClick={this.handleClick} value="9">
              9
            </Button>

            {/* MUL */}
            <Button handleClick={this.handleClick} value="*">
              X
            </Button>

            {/* DIVISION */}
            <Button handleClick={this.handleClick} value="/">
              ÷
            </Button>
          </div>

          <div className="row">
            <Button handleClick={this.handleClick} value="4">
              4
            </Button>
            <Button handleClick={this.handleClick} value="5">
              5
            </Button>
            <Button handleClick={this.handleClick} value="6">
              6
            </Button>
            <Button handleClick={this.handleClick} value="-">
              -
            </Button>
            <Button handleClick={this.handleNone}>MR</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick} value="1">
              1
            </Button>
            <Button handleClick={this.handleClick} value="2">
              2
            </Button>
            <Button handleClick={this.handleClick} value="3">
              3
            </Button>
            <Button handleClick={this.handleClick} value="+">
              +
            </Button>
            <Button handleClick={this.handleNone}>M-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick} value="0">
              0
            </Button>
            <Button handleClick={this.handleClick} value=".">
              .
            </Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.handleClick} value="+">
              +
            </Button>
            <Button handleClick={this.handleNone}>M+</Button>
          </div>
        </div>
        <br />
        <Beta />
      </div>
    );
  }
}

export default App;
