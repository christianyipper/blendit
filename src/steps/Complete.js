// function Complete({ allIngredients }) {
//     return (
//         <div>
//             <h1 className="text-pink-500 mt-24">Congratulations!</h1>
//             <p className="text-grey-500">You have successfully created your smoothie!</p>

//             <div className="flex flex-row flex-wrap gap-4">
//                 {allIngredients.length > 0
//                 ?
//                     allIngredients.map((item) => (
//                     <img width="100px" src={item}></img>
//                 ))
//                     : "No items selected"}
//                 <div 
//                     className="smoothie-base rounded-full w-24 h-24"
//                 ></div>
//             </div>

//         </div>
//     );
// }

import { useState } from "react";
import { smoothieData } from "../data/ingredients";
import { useInView } from "react-intersection-observer";

import Button from "../components/Button";
import FruitButton from "../components/FruitButton";
import Blender from "../assets/images/Blender.png";
import Lid from "../assets/images/Lid.png";

function Complete({ nextStep, currentStep, previousStep, updateIngredients, allIngredients }) {

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
            <h1 className="text-pink-500 mt-24">Congratulations!</h1>
            <p className="text-grey-500">You have successfully created your smoothie!</p>
            <div className={`flex flex-nowrap justify-center relative mt-28 mb-4`}>
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
                            <div className={`absolute flex flex-wrap z-50`}>
                                <img width="250vw" src={item} className=" -my-4 z-50 "/>
                            </div>
                        ))
                            : <p></p> }
                    </div>
                    <div className="smoothie-base w-screen h-[100vw] aspect-square rounded-full opacity-100 absolute -top-4 scale-[0.85]"/>
                </div>
            </div>
        </div>
    );
}

export default Complete;