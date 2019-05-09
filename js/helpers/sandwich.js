import bread from "../components/bread.js";

import cheese from "../components/cheese.js";

import condiments from "../components/condiments.js";

import meats from "../components/meats.js";

import veggies from "../components/veggies.js";
 let total = 0
 const printToDom = (divid,Texttoprint) => {
     const selecteddiv = document.getElementById(divid)
     selecteddiv.innerHTML= Texttoprint
 }
 const getTotal = () => {
     let domString =`<div>$${total}</div>`;
     printToDom ("ordertotal",domString);
 };
 

const determineComponent = (id) => {
    let component = id.split("_")
    switch(component[0]) {
        case 'bread':  
       total+= bread.addBread(component[1]);
        break; 

        case 'cheese':
        total+=cheese.addCheese(component[1]);
        break;

        case 'condiments':
        total+=condiments.addCondiments(component[1]);
        break;

        case 'meats':
        total+=meats.addMeats(component[1]);
        break;

        case 'veggies':
        total+=veggies.addVeggies(component[1]);
        break;
    };
};



export default { determineComponent, getTotal } 