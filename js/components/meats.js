const meats_plural = {
  ham: 1.51,
  turkey: 1.32,
  bologna: 1.34,
  chicken: 1.07
};


const addMeats = (type) => {
 return meats_plural[type];

};

export default { addMeats }