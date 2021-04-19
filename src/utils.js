export const defaultOptions = () => {
    const dryYeastPerBun = 1.0625;
    const freshYeastPerBun = dryYeastPerBun * 3;
    // amount per bun
    return {
    	count: 8,
        flour: 52.25,
        water: 21.25,
        butter: 3.5,
        egg: 0.125,
        salt: 1,
        sugar: 6.25,
        dryYeast: dryYeastPerBun,
        freshYeast: freshYeastPerBun,
    }
};

export const ingredientsListYeast = (options) => {
    const {
        flour,
        water,
        butter,
        egg,
        salt,
        sugar,
        dryYeast,
        freshYeast,
    } = options;

  const ingredients = [
    {
      name: "Flour",
      absolute: flour,
    },
    {
      name: "Water",
      absolute: water,
    },
    { 
      name: "Butter",
      absolute: butter,
    },
    {
      name: "Egg(s)",
      absolute: egg,
    },
    {
      name: "Salt",
      absolute: salt,
    },
    {
      name: "Sugar",
      absolute: sugar,
    },
    {
      name: "Dry Yeast",
      absolute: dryYeast,
    },
    {
      name: "...or Fresh Yeast",
      absolute: freshYeast,
    },
  ];

  return ingredients;
}
