import React from "react";
import * as qs from "query-string";

import IngredientList from "../components/IngredientList";
import { defaultOptions, ingredientsListYeast } from "../utils";

const parseNum = (value) => value ? parseFloat(value) : undefined;

const optionsFromQueryString = (parsedOptions) => ({
    count: parseNum(parsedOptions.count),
    salt: parseNum(parsedOptions.salt),
    water: parseNum(parsedOptions.water),
    dryYeastPercent: parseNum(parsedOptions.dryYeastPercent),
})

const Result = props => {
  const parsed = qs.parse(props.location.search);
  const base = {
    ...defaultOptions(),
    ...optionsFromQueryString(parsed)
  };

  const options = {
    ...base,
    freshYeastPercent: (base.dryYeastPercent * 3),
  }

//  const ingredients = parsed.yeast ? ingredientsListYeast(options) : ingredientsListSourdough(options);
  const ingredients = ingredientsListYeast(options);

  return (
    <IngredientList
      count={options.count}
      ingredients={ingredients}
    />
  );
};

export default Result;

