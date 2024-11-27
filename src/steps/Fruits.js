import { useState } from "react";
import { smoothieData } from "../data/ingredients";
import { useInView } from "react-intersection-observer";

import Button from "../components/Button";
import FruitButton from "../components/FruitButton";
import Blender from "../assets/images/Blender.png";
import Lid from "../assets/images/Lid.png";


function Fruits({ nextStep, currentStep, previousStep, updateIngredients, allIngredients, baseRGBs }) {

    // state to track all selected ingredients
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    // when clicked...
    const handleClick = (ingredient) => {

        // check if the item is already selected
        const isSelected = selectedIngredients.includes(ingredient.name);

        // if the item is already selected or
        // if less than 3 ingredients are selected
        if (isSelected || selectedIngredients.length < 3) {
            // update the selected ingredients
            updateIngredients(ingredient.image);

            // if the selected item is already in the baseRGBs array, remove it.
            if (baseRGBs.includes(ingredient.rgb)) {
                baseRGBs.splice(baseRGBs.indexOf(ingredient.rgb), 1);
            //  otherwise, if the array is less than 3, add it
            } else if (baseRGBs.length < 3) {
                baseRGBs.push(ingredient.rgb);
            }

            // toggle the selected ingredient in the array
            setSelectedIngredients((prevSelected) =>
                prevSelected.includes(ingredient.name)
                // remove if already selected
                ? prevSelected.filter((name) => name !== ingredient.name) 
                // add if not selected
                : [...prevSelected, ingredient.name]
            );
        }
    };

    // this is a variable that specifies the step
    // this is how we get the ingredients for the current step 
    const fruitIngredients = smoothieData.steps.find(step => step.id === 'fruit').ingredients;

    let base = allIngredients[0]
    let fruit = allIngredients[1]
    let fruitItems = [...fruit];
    let baseItems = [...base];

    // this is intersection observer
    // it declares a reference and view value
    const { ref: refView, inView: inView } = useInView( { threshold: 0.5 } );

    return (
        // this is the reference for the intersection observer
        <div ref={refView}>
            <h1 className="text-pink-500 mt-20 z-50">Step {currentStep}</h1>
            <p className={ inView ? "fruit-buttons-item" : "" }>Choose up to three fruits.</p>
            <div className={`flex flex-nowrap justify-center relative mt-24 mb-4`}>
                <div className={`flex flex-nowrap justify-center relative ${ inView ? "blender-pour" : "" }`}>
                    <div className={`flex flex-nowrap justify-center relative ${ inView ? "blender-shake" : "" }`}>
                        <img src={Blender} 
                            alt=""
                            className="w-1/2 z-10"
                        />
                        <img src={Lid} 
                            alt=""
                            className={`w-1/2 z-10 absolute bottom-0 rotate-[15deg] translate-x-[-8vw] translate-y-[-20vw] opacity-0 ${ inView ? "lid-on" : "" }`}
                        />
                        <div className="flex flex-wrap flex-col-reverse absolute bottom-[33vw] left-[36vw]">
                            <div className="flex flex-wrap flex-col-reverse absolute overflow-hidden">
                                {baseItems.length > 0
                                ?
                                baseItems.map((item) => (
                                    <div className={`relative ${ inView ? "fruit-blend" : "" }`}>
                                        <img width="100vw" src={item} className="relative -my-4 -z-20"/>
                                    </div>
                                ))
                                    : <p></p> }
                                    <div className="rounded-full w-24 h-24"></div>
                            </div>
                            <div className="w-[40vw] h-[20vh] ml-[-10vw] relative overflow-hidden">
                                <div className={`smoothie-base w-[40vw] h-[20vh] translate-y-[110%] z-40 ${ inView ? "fruit-blend-rgb" : "" }`}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-screen h-[100vw] aspect-square gap-4
                    rounded-full absolute 
                    -top-1/3 -z-50 
                    bg-transparent border-[16px] border-solid border-transparent 
                    flex justify-center ${ inView ? "plate" : "" }`}>
                    <div className={`flex flex-wrap flex-col absolute z-50 ${ inView ? "fruit-buttons-item" : "" }`}>
                        {fruitItems.length > 0
                        ?
                        fruitItems.map((item) => (
                            <div className={`parent ${ inView ? "item-place" : "" }`}>
                                <img width="130vw" src={item} className="relative -my-4 -z-20 "/>
                            </div>
                        ))
                            : <p></p> }
                    </div>
                    <div className={`smoothie-base w-screen h-[100vw] aspect-square rounded-full opacity-0 absolute -top-4 ${ inView ? "circle-bg" : "" }`}/>
                </div>
            </div>
            <div className={`gap-2 px-4 flex flex-row justify-between -mt-14 mb-4 z-[100] relative opacity-0 ${ inView ? "fruit-buttons" : "" }`}>
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
            <div className={`
                flex flex-row flex-nowrap gap-4 px-4 relative
                overflow-x-scroll opacity-0
                ${ inView ? "fruit-buttons" : "" }
            `}>
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
        </div>
    );
}

export default Fruits;