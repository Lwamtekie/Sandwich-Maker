const condiments = {
  ChipotleMayonnaise: .50,
  Pesto: .75,
  TonkatsuSauce: .86,
  GreekYogurt: .99
};


const addCondiments = (type) => {
  return condiments_plural[type];

};

export default { addCondiments }