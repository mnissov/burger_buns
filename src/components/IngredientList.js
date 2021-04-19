import React, { Component } from "react";
import Close from "../components/Close";
import Ingredient from "../components/Ingredient";

export default class IngredientList extends Component {
  render() {
    return (
      <div className="result">
        <main className="main">
          <div className="view-header">
            <div className="result-header">
              <h2>
                Required ingredients for: {this.props.count}{" "}
                {this.props.count > 1 ? "buns" : "bun"}
              </h2>
            </div>
            <Close color="white" />
          </div>
          {this.props.ingredients.map((ing, i) => {
            return (
              <Ingredient
                name={ing.name}
                percentage={ing.percentage}
                absolute={ing.absolute}
                breakdown={ing.breakdown ? ing.breakdown : []}
                description={ing.description}
                count={this.props.count}
                key={i}
                intro={ing.intro}
              />
            );
          })}
        </main>
      </div>
    );
  }
}
