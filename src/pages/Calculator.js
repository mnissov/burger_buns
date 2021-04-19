import React from "react";
import { Link } from "react-router-dom";

//import logo from "../images/logo.svg";
import logo from "../images/buns.jpg";
import calculator from "../images/calculator.svg";
import Input from "../components/Input";
import { defaultOptions } from "../utils";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultOptions();
  }

  handleCountChange = e => {
    this.setState({ count: e.target.value });
  };

  buildParameters() {
    const opts = {
      ...defaultOptions(),
      count: this.state.count,
    };
    return `weight=${opts.weight}&count=${opts.count}&water=${opts.water}&salt=${opts.salt}&dryYeastPercent=${opts.dryYeastPercent}`
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="logo">
            <img src={logo} width="50%" height="auto" alt="Hamburger Buns" />
          </h1>
          <h2 className="logo">
            <img src={calculator} alt="Calculator" />
          </h2>
        </header>
        <main className="main">
          <form>
            <Input
              id="count"
              onChange={this.handleCountChange}
              label="Number of buns"
              value={this.state.count}
              step="1"
            >
              <small className="text-muted">
                1) Pick the number of buns you want to bake.
              </small>
            </Input>
              
            <div className="calculate-buttons">
              <Link to={`result?yeast=true&${this.buildParameters()}`}>Calculate</Link>
            </div>
          </form>
          <div className="more-info">
            <div className="more-info-links">
              <a href="https://www.kingarthurbaking.com/recipes/beautiful-burger-buns-recipe">Source</a>
            </div>
          </div>
          <div className="text-muted pwa" id="pwa">
            Add to homescreen
          </div>
        </main>
      </div>
    );
  }
}

export default Calculator;
