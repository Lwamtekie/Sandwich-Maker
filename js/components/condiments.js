const condiments_plural = {
  Mayonnaise: 1.32,
  Tahini: 1.34,
  Hummus: 1.23,
  Miso: 1.25
};


const addCondiments = (type) => {
  return condiments_plural[type];

};

export default { addCondiments }