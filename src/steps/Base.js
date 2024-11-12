import { useState } from "react";
import Button from "../components/Button";
import FruitButton from "../components/FruitButton";
import { smoothieData, getBaseRGB } from "../data/ingredients";

function Base({ nextStep, currentStep, updateIngredients, selectedIngredients, allIngredients, baseRGBs }) {

    // this is a variable that specifies the step
    // this is how we get the ingredients for the current step 
    const baseIngredients = smoothieData.steps.find(step => step.id === 'base').ingredients;

    // this is a variable that holds the RGB colors
    return (
        <div>
            <h1 className="text-pink-500 mt-24">Step {currentStep}</h1>
            
            <div className="
                flex flex-row flex-wrap gap-4
            ">
                {/* loop through the base ingredients */}
                {baseIngredients.map((ingredient) => (
                    // render a button for each ingredient
                    <FruitButton
                        // set the button's text to the ingredient's name
                        text={ingredient.name}
                        color="text-pink-500"
                        bg="bg-yellow-100"
                        link={ingredient.image}
                        onClick={() => { 
                            // update the selected ingredients when the button is clicked
                            updateIngredients(ingredient.image);
                            
                            // if the baseRGBs array already includes the ingredient's RGB color
                            if (baseRGBs.includes(ingredient.rgb)) {
                                // remove the ingredient's RGB color from the array
                                baseRGBs.splice(baseRGBs.indexOf(ingredient.rgb), 1);
                            } else if (baseRGBs.length < 3) {
                                // if the baseRGBs array has less than 3 items, add the ingredient's RGB color to the array
                                baseRGBs.push(ingredient.rgb)
                            };
                        }}
                    />
                ))}
            </div>

                <Button 
                    text="Next"
                    color="text-white"
                    bg="bg-pink-500"
                    border="border-pink-500"
                    onClick={nextStep}
                />
                <p className="text-grey-500">
                    Current Order:
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                    {/* if the order has less than 1 item, display a message 
                        if the order has more than 1 item, display the order with a comma*/}
                    {selectedIngredients.length > 0
                    ?
                        selectedIngredients.map((item) => (
                        <img width="100px" src={item}></img>
                    ))
                        : <p>No items selected</p> }
                    <div 
                        className="smoothie-base rounded-full w-24 h-24"
                    >
                    </div>
                </div>
                <p className="text-grey-900 font-bold">
                    Full Order:
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                    {/* if the order has less than 1 item, display a message 
                        if the order has more than 1 item, display the order with a comma*/}
                    {allIngredients.length > 0
                    ?
                        allIngredients.map((item) => (
                        <img width="100px" src={item}></img>
                    ))
                        : <p>No items selected</p> }
                </div>
        </div>
    );
}

export default Base;