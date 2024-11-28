import { useState } from "react";
import { smoothieData } from "../data/ingredients";
import { useInView } from "react-intersection-observer";

import ArrowButton from "../components/ArrowButton";
import FruitButton from "../components/FruitButton";
import Blender from "../assets/images/Blender.png";

function Base({ nextStep, currentStep, updateIngredients, currentIngredients, baseRGBs }) {

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
    const baseIngredients = smoothieData.steps.find(step => step.id === 'base').ingredients;

    // this is intersection observer
    // it declares a reference and view value
    const { ref: refView, inView: inView } = useInView( { threshold: 0.5 } );
    
    return (
        <div 
            // this is the reference for the intersection observer
            ref={refView}
            className="
            w-full grid relative
            grid-cols-4 m-auto py-5
            desktop:grid-cols-12 desktop:gap-x-6 desktop:grid-flow-dense
            "
        >
            <div className="
            place-self-center flex flex-nowrap justify-center
            relative mt-24 mb-4 mx-5
            col-span-4 max-h-96 aspect-square
            desktop:col-start-7 desktop:col-span-6 desktop:grid-rows-1
            desktop:max-h-full desktop:h-full desktop:-mb-5
            ">
                <img src={Blender} 
                    alt=""
                    className="
                    place-self-end h-full w-fit z-10
                    desktop:h-3/4
                    "
                />
                <div className="
                flex flex-wrap flex-col-reverse absolute 
                w-[75%] h-[60%] bottom-[38%] left-[33%]
                desktop:bottom-[28%] desktop:left-[42%]
                ">
                    <div className="flex flex-wrap flex-col-reverse absolute fruit-container">
                        {currentIngredients.length > 0
                        ?
                        currentIngredients.map((item) => (
                            // when this element intersects the reference, it will add the fruit-drop class. If not, it will remove that class
                            <div className={ `${ inView ? "fruit-drop" : "" }` }>
                                <img width="100vw" src={item} className="
                                relative -my-4
                                desktop:w-full
                                "/>
                            </div>
                        ))
                            : <p></p> }
                        <div className="rounded-full w-24 h-24"/>
                    </div>
                </div>
                <div className="
                w-full h-full rounded-full absolute
                bg-pink-100 mt-4 -top-1/4 -z-10
                desktop:top-[-10%]
                "
                />
            </div>
            <div className="
                col-span-4 grid grid-cols-4
                desktop:col-start-1 desktop:col-span-6 desktop:grid-cols-6
            ">
                <hgroup className="
                    col-span-4 mx-5
                    desktop:col-span-6
                    ">
                        <p><span className="text-pink-500 font-bold">Base</span> &gt; Fruits &gt; Toppings</p>
                        <h1 className="
                            text-grey-900
                            text-2xl
                            desktop:text-5xl
                        ">
                            Blend Your Base
                        </h1>
                        <h3 className="
                            text-grey-500 text-base
                            font-poppins font-normal
                            mb-4
                            desktop:text-2xl
                        ">
                            Select 
                            <span className="text-pink-500 font-bold"> 3 </span>
                            of your favorite ingredients.
                        </h3>
                    </hgroup>
                <div className="
                    col-span-4 h-fit
                    desktop:col-start-1 desktop:col-span-6
                    "
                >
                    <div className="
                        flex flex-row flex-nowrap gap-5 px-5 relative
                        overflow-x-scroll
                        desktop:flex-wrap
                    ">
                        {/* loop through the base ingredients */}
                        {baseIngredients.map((ingredient) => (
                            // render a button for each ingredient
                            <FruitButton
                                // set the button's text to the ingredient's name
                                text={ingredient.name}
                                color="text-grey-900"
                                selected={
                                        selectedIngredients.includes(ingredient.name)
                                        ? "scale-90 even:rotate-6 odd:-rotate-3 opacity-50"
                                        : "scale-100"
                                }
                                link={ingredient.image}
                                onClick={() => handleClick(ingredient)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="
                col-span-4 grid grid-cols-2 mt-4 mx-5
                desktop:col-span-6
            ">
                <div/>
                <div className="flex justify-end">
                    <ArrowButton 
                        onClick={nextStep}
                    />
                </div>
            </div>
    </div>
    );
}

export default Base;