const veggies = {
  Arugula : .27,
  lettuce: .33,
  Radish: .47,
  Parsley: .33
};


const addVeggies = (type) => {
  return veggies_plural[type];

};

export default { addVeggies }