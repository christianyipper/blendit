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
                        // alert the user
                        alert("You can only select up to 3 ingredients");
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

    // triggered when step changes, logs step details
    const onStepChange = (stats) => {
        // console.log(stats);
    };

    return (
        <StepWizard
            onStepChange={onStepChange}
            isHashEnabled={true}
        >
            {/* Step 1 */}
            <Base
                hashKey={"base"}
                // runs the updateIngredients function when an item is selected
                // tells the function that we're on the "base" step, and passes the selected item
                updateIngredients={(item) => updateIngredients("base", item)} 
                // used to display the ingredients in the current step
                selectedIngredients={selectedIngredients.base}
                // used to display all ingredients in the order
                allIngredients={Object.values(selectedIngredients).flat()}
            />
            {/* Step 2 */}
            <Fruits
                hashKey={"fruits"}
                updateIngredients={(item) => updateIngredients("fruits", item)}
                selectedIngredients={selectedIngredients.fruits} 
                allIngredients={Object.values(selectedIngredients).flat()}
            />
            {/* Step 3 */}
            <Toppings
                hashKey={"toppings"}
                updateIngredients={(item) => updateIngredients("toppings", item)} 
                selectedIngredients={selectedIngredients.toppings} 
                allIngredients={Object.values(selectedIngredients).flat()}
            />
            {/* Complete */}
            <Complete 
                hashKey={"complete"}
                allIngredients={Object.values(selectedIngredients).flat()}
            />
        </StepWizard>
    );
};

export default Builder;
