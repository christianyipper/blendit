import { useState } from "react";
import Button from "../components/Button";
import FruitButton from "../components/FruitButton";
import { smoothieData } from "../data/ingredients";

function Fruits({ nextStep, currentStep, previousStep, updateIngredients, allIngredients, baseRGBs }) {

    // State to track all selected ingredients
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const handleClick = (ingredient) => {

        // Check if the item is already selected
        const isSelected = selectedIngredients.includes(ingredient.name);

        // Allow toggling off the selected item or adding a new one only if less than 3 are selected
        if (isSelected || selectedIngredients.length < 3) {
            // Update the selected ingredients
            updateIngredients(ingredient.image);

            // Manage the baseRGBs array
            if (baseRGBs.includes(ingredient.rgb)) {
                baseRGBs.splice(baseRGBs.indexOf(ingredient.rgb), 1);
            } else if (baseRGBs.length < 3) {
                baseRGBs.push(ingredient.rgb);
            }

            // Toggle the selected ingredient in the array
            setSelectedIngredients((prevSelected) =>
                prevSelected.includes(ingredient.name)
                ? prevSelected.filter((name) => name !== ingredient.name) // Remove if already selected
                : [...prevSelected, ingredient.name] // Add if not selected
            );
        }
    };

    // this is a variable that specifies the step
    // this is how we get the ingredients for the current step 
    const fruitIngredients = smoothieData.steps.find(step => step.id === 'fruit').ingredients;

    return (
        <div>
            <h1 className="text-pink-500 mt-24">Step {currentStep}</h1>
                <div className="
                    flex flex-row flex-nowrap gap-4 relative
                    overflow-x-scroll
                ">
                    {/* loop through the fruits ingredients */}
                    {fruitIngredients.map((ingredient) => (
                        // render a button for each ingredient
                        <FruitButton
                            // set the button's text to the ingredient's name
                            text={ingredient.name}
                            color="text-pink-500"
                            bg={
                                selectedIngredients.includes(ingredient.name)
                                ? "bg-yellow-500"
                                : "bg-yellow-100"
                            }
                            link={ingredient.image}
                            // update the selected ingredients when the button is clicked
                            onClick={() => handleClick(ingredient)}
                        />
                    ))}
                </div>
                <div className="gap-2 px-4 flex flex-row">
                    <Button 
                        text="Previous"
                        color="text-white"
                        bg="bg-pink-500"
                        border="border-pink-500"
                        onClick={previousStep}
                    />
                    <Button 
                        text="Next"
                        color="text-white"
                        bg="bg-pink-500"
                        border="border-pink-500"
                        onClick={nextStep}
                    />
                </div>
                {/* <p className="text-grey-500">
                    Current Order:
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                    {selectedIngredients.length > 0
                    ?
                        selectedIngredients.map((item) => (
                        <img width="100px" src={item}></img>
                    ))
                        : <p>No items selected</p> }
                </div> */}
                {/* <p className="text-grey-900 font-bold">
                    Full Order:
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                    if the order has less than 1 item, display a message 
                        if the order has more than 1 item, display the order with a comma
                    {allIngredients.length > 0
                    ?
                        allIngredients.map((item) => (
                        <img width="36px" src={item}></img>
                    ))
                        : <p>No items selected</p> }
                    <div 
                        className="smoothie-base rounded-full w-24 h-24"
                    >
                    </div>
                </div> */}
        </div>
    );
}

export default Fruits;