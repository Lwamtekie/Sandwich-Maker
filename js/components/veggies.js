const veggies_plural = {
  Cucumber : 1.00,
  lettuce: 1.11,
  pickles: 1.12,
  Avocado : 1.13
};


const addVeggies = (type) => {
  return veggies_plural[type];

};

export default { addVeggies }