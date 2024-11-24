import React, { useState } from "react";
import StepWizard from "react-step-wizard";

// import each step from './steps';
import Base from "./steps/Base";
import Fruits from "./steps/Fruits";
import Toppings from "./steps/Toppings";
import Complete from "./steps/Complete";

function Builder() {
    
    // this is a variable that holds the ingredients for each step
    // we can use this to display ALL selected ingredients
    // or to pass the selected ingredients to the next step
    const [selectedIngredients, setSelectedIngredients] = useState({
        // ingredients for Base step
        base: [],
        // ingredients for Fruits step
        fruits: [],
        // ingredients for Toppings step
        toppings: [],
    });

    // this function updates the ingredients per step
    const updateIngredients = (step, item) => {

        setSelectedIngredients(prevState => {
            // creates a variable that holds the ingredients for the current step
            const currentIngredients = prevState[step];
            // creates a variable that holds the updated ingredients
            // we use this variable to apply changes to the ingredient list
            let updatedIngredients;
            
            // if the item is already in the order
            if (currentIngredients.includes(item)) {
                // create a variable that filters out the item from the order
                updatedIngredients = currentIngredients.filter(ingredient => ingredient !== item);
                } else {
                    // if the amount of ingredients is less than 3,
                    if (currentIngredients.length < 3) {
                        // add the item to the order
                        updatedIngredients = [...currentIngredients, item];
                    } else {
                        // if the amount of ingredients is more than 3
                        // warn the user
                        console.log("You can only select up to 3 ingredients");
                        // set the updated ingredients to the current ingredients
                        updatedIngredients = currentIngredients;
                    }
                }

                return {
                    // ... -> spread operator
                    // copies the previous state
                    ...prevState,
                    // and adds the updated state with the new ingredients
                    [step]: updatedIngredients
                };
            });
        };

    // this is a variable that holds the RGB colors
    const [baseRGBs] = useState([]);

    // selects the smoothie base element so it can be colored
    const smoothieBase = document.querySelectorAll('.smoothie-base');

    // if the baseRGBs array has 3 elements
    if (baseRGBs.length === 3) {

        // calculate the average RGB color
        let Fruit1 = baseRGBs[0];
        let Fruit2 = baseRGBs[1];
        let Fruit3 = baseRGBs[2];

        let Red = (Fruit1[0] + Fruit2[0] + Fruit3[0]) / 3; 
        let Green = (Fruit1[1] + Fruit2[1] + Fruit3[1]) / 3;
        let Blue = (Fruit1[2] + Fruit2[2] + Fruit3[2]) / 3;

        // round the RGB values
        Red = Math.round(Red);
        Green = Math.round(Green);
        Blue = Math.round(Blue);

        // convert the RGB values to a string
        let baseRGB = 'rgb(' + [Red, Green, Blue].toString() + ')';

        // color the smoothie base
        smoothieBase.forEach(item => {
            item.style.backgroundColor = baseRGB
            } 
        );

    } else if (baseRGBs.length > 1 && baseRGBs.length < 3) {

        // remove color from the smoothie base
        smoothieBase.forEach(item => {
            item.style.backgroundColor = 'unset'
            } 
        );

    }

    return (
        <div className="w-screen overflow-hidden">
            <StepWizard
                isHashEnabled={true}
            >
                {/* Step 1 */}
                <Base
                    hashKey={"base"}
                    // runs the updateIngredients function when an item is selected
                    // tells the function that we're on the "base" step, and passes the selected item
                    updateIngredients={(item) => updateIngredients("base", item)} 
                    // used to display the ingredients and RGB in the current step
                    currentIngredients={selectedIngredients.base}
                    // used to display all ingredients in the order
                    // flattens the array as all the ingredients are nested in their own steps
                    allIngredients={Object.values(selectedIngredients)}
                    // used to color the smoothie base
                    baseRGBs={baseRGBs}
                />
                {/* Step 2 */}
                <Fruits
                    hashKey={"fruits"}
                    updateIngredients={(item) => updateIngredients("fruits", item)}
                    currentIngredients={selectedIngredients.fruits} 
                    allIngredients={Object.values(selectedIngredients)}
                    baseRGBs={baseRGBs}
                />
                {/* Step 3 */}
                <Toppings
                    hashKey={"toppings"}
                    updateIngredients={(item) => updateIngredients("toppings", item)} 
                    currentIngredients={selectedIngredients.toppings} 
                    allIngredients={Object.values(selectedIngredients)}
                    baseRGBs={baseRGBs}
                />
                {/* Complete */}
                <Complete 
                    hashKey={"complete"}
                    allIngredients={Object.values(selectedIngredients)}
                />
            </StepWizard>
        </div>
    );
};

export default Builder;
