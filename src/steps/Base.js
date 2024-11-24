import { useState } from "react";
import { smoothieData, getBaseRGB } from "../data/ingredients";
import { useInView } from "react-intersection-observer";

import Button from "../components/Button";
import FruitButton from "../components/FruitButton";
import Blender from "../assets/images/Blender.png";

function Base({ nextStep, currentStep, updateIngredients, currentIngredients, allIngredients, baseRGBs }) {

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
    const baseIngredients = smoothieData.steps.find(step => step.id === 'base').ingredients;

    // this is intersection observer
    // it declares a reference and view value
    const { ref: refView, inView: inView } = useInView( { threshold: 0.5 } );
    
    return (
        // this is the reference for the intersection observer
        <div ref={refView}>
            <h1 className="text-pink-500 mt-20">Step {currentStep}</h1>
            <p>Choose three base ingredients.</p>
            <div className="flex flex-nowrap justify-center relative mt-24 mb-4">
                <img src={Blender} 
                    alt=""
                    className="w-1/2 z-10"
                />
                <div className="flex flex-wrap flex-col-reverse absolute bottom-[33vw] left-[36vw]">
                    <div className="flex flex-wrap flex-col-reverse absolute fruit-container">
                        {currentIngredients.length > 0
                        ?
                        currentIngredients.map((item) => (
                            // when this element intersects the reference, it will add the fruit-drop class. If not, it will remove that class
                            <div className={ `${ inView ? "fruit-drop" : "" }` }>
                                <img  src={item} className="relative -my-4"/>
                            </div>
                        ))
                            : <p></p> }
                        <div className="rounded-full w-24 h-24"/>
                    </div>
                </div>
                <div className="w-full aspect-square rounded-full absolute bg-pink-100 -top-1/3 -z-10"/>
            </div>
            <div className="gap-2 px-4 flex flex-row justify-between -mt-14 mb-4 z-[100] relative">
                <div/>
                <Button 
                    text="Next"
                    color="text-white"
                    bg="bg-pink-500"
                    border="border-pink-500"
                    onClick={nextStep}
                />
            </div>
            <div className="
                flex flex-row flex-nowrap gap-4 px-4 relative
                overflow-x-scroll
            ">
                {/* loop through the base ingredients */}
                {baseIngredients.map((ingredient) => (
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
                        onClick={() => handleClick(ingredient)}
                    />
                ))}
            </div>
                {/* <p className="text-grey-500">
                    Current Order:
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                    {currentIngredients.length > 0
                    ?
                        currentIngredients.map((item) => (
                        <img width="100px" src={item}/>
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
                    if the order has less than 1 item, display a message 
                        if the order has more than 1 item, display the order with a comma
                    {allIngredients.length > 0
                    ?
                        allIngredients.map((item) => (
                        <img width="36px" src={item}></img>
                    ))
                        : <p>No items selected</p> }
                </div> */}
        </div>
    );
}

export default Base;