const breads = {
  asiago: 1.15,
  white: 1.23,
  wheat: 1.43,
  rosemary: 1.06
};


const addBread = (type) => {
  return breads[type];

};

export default { addBread }