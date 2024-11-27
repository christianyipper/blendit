import { useState } from "react";
import { smoothieData } from "../data/ingredients";
import { useInView } from "react-intersection-observer";

import Button from "../components/Button";
import FruitButton from "../components/FruitButton";
import Blender from "../assets/images/Blender.png";
import Lid from "../assets/images/Lid.png";

function Toppings({ nextStep, currentStep, previousStep, updateIngredients, allIngredients }) {

    // State to track all selected ingredients
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const handleClick = (ingredient) => {

        // Check if the item is already selected
        const isSelected = selectedIngredients.includes(ingredient.name);

        // Allow toggling off the selected item or adding a new one only if less than 3 are selected
        if (isSelected || selectedIngredients.length < 3) {
            // Update the selected ingredients
            updateIngredients(ingredient.image);

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
    const toppingIngredients = smoothieData.steps.find(step => step.id === 'topping').ingredients;

    let base = allIngredients[0]
    let fruit = allIngredients[1]
    let topping = allIngredients[2]
    let baseItems = [...base];
    let fruitItems = [...fruit];
    let toppingItems = [...topping];

    // this is intersection observer
    // it declares a reference and view value
    const { ref: refView, inView: inView } = useInView( { threshold: 0.5 } );

    return (
        <div ref={refView}>
            <h1 className="text-pink-500 mt-20">Step {currentStep}</h1>
            <p>Choose up to three toppings.</p>
            <div className={`flex flex-nowrap justify-center relative mt-24 mb-4`}>
                <div className="flex flex-nowrap justify-center relative">
                    <div className="flex flex-nowrap justify-center relative">
                        <img src={Blender} 
                            alt=""
                            className="w-1/2 z-10 opacity-0"
                        />
                        <div className="hidden flex-wrap flex-col-reverse absolute bottom-[33vw] left-[36vw]">
                            <div className="flex flex-wrap flex-col-reverse absolute">
                                {baseItems.length > 0
                                ?
                                baseItems.map((item) => (
                                    <div className="relative">
                                        <img src={item} className="relative -my-4 -z-20"/>
                                    </div>
                                ))
                                    : <p></p> }
                                    <div className="rounded-full w-24 h-24"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-[100vw] aspect-square
                    rounded-full absolute 
                    -top-1/3 -z-50 
                    bg-yellow-100 border-[16px] border-solid border-blue-100
                    flex justify-center scale-90">
                    <div className="flex flex-wrap flex-col absolute z-50">
                        {fruitItems.length > 0
                        ?
                        fruitItems.map((item) => (
                            <div className="parent">
                                <img width="130vw" src={item} className="relative -my-4 -z-20 "/>
                            </div>
                        ))
                            : <p></p> }
                    </div>
                    <div className="flex flex-nowrap flex-col justify-center items-center absolute z-50 w-full h-full">
                        {toppingItems.length > 0
                        ?
                        toppingItems.map((item) => (
                            <div className={`absolute flex flex-wrap z-50 ${ inView ? "item-place" : "" }`}>
                                <img width="250vw" src={item} className=" -my-4 z-50 "/>
                            </div>
                        ))
                            : <p></p> }
                    </div>
                    <div className="smoothie-base w-screen h-[100vw] aspect-square rounded-full opacity-100 absolute -top-4 scale-[0.85]"/>
                </div>
            </div>
            <div className="gap-2 px-4 flex flex-row justify-between -mt-14 mb-4 z-[100] relative">
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
            <div className="
                flex flex-row flex-nowrap gap-4 px-4 relative
                overflow-x-scroll
            ">
                {/* loop through the fruits ingredients */}
                {toppingIngredients.map((ingredient) => (
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
        </div>
    );
}

export default Toppings;