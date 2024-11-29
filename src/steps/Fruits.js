import { useState } from "react";
import { smoothieData } from "../data/ingredients";
import { useInView } from "react-intersection-observer";

import ArrowButton from "../components/ArrowButton";
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
            updateIngredients(ingredient.layoutImage);

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
        <div
            ref={refView}
            className="
            w-full grid relative
            grid-cols-4 m-auto py-5
            desktop:grid-cols-12 desktop:gap-x-6 desktop:grid-flow-dense
            "
        >
            <div 
                className="
                place-self-center flex flex-nowrap justify-center
                relative mt-24 mb-4 mx-5
                col-span-4 max-h-96 aspect-square
                desktop:col-start-7 desktop:col-span-6 desktop:grid-rows-1
                desktop:max-h-full desktop:h-full desktop:-mb-5
                "
                >
                <div className={`flex flex-nowrap justify-center relative ${ inView ? "blender-pour" : "" }`}>
                    <div className={`flex flex-nowrap justify-center relative ${ inView ? "blender-shake" : "" }`}>
                        <img src={Blender} 
                            alt="Blender"
                            className="
                            place-self-end h-full w-fit z-10
                            desktop:h-3/4
                            "
                        />
                        <img src={Lid} 
                            alt="Lid"
                            className={`h-full w-full z-10 absolute -top-7 rotate-[15deg] opacity-0  desktop:top-32
                            ${ inView ? "lid-on" : "" }`}
                        />
                        <div className="flex flex-wrap flex-col-reverse absolute bg-black
                            w-[75%] h-[50%] bottom-[38%] left-[33%]
                            desktop:w-[60%] desktop:bottom-[26%] desktop:left-[32%]">
                            <div className="flex flex-wrap flex-col-reverse absolute overflow-hidden">
                                {baseItems.length > 0
                                ?
                                baseItems.map((item) => (
                                    <div className={`relative ${ inView ? "fruit-blend" : "" }`}>
                                        <img width="100vw" src={item} className="relative -my-4 -z-20 desktop:w-[50%]"/>
                                    </div>
                                ))
                                    : <p></p> }
                                    <div className="rounded-full w-24 h-24"></div>
                            </div>
                            <div className="w-full h-[100%] relative translate-x-[-30%] overflow-hidden">
                                <div className={`smoothie-base w-full h-full translate-y-[110%] z-40 ${ inView ? "fruit-blend-rgb" : "" }`}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-full aspect-square gap-4
                    rounded-full absolute 
                    mt-4 -top-1/4
                    desktop:top-[-10%] -z-50 
                    desktop:w-full desktop:h-full
                    bg-transparent border-[16px] border-solid border-transparent 
                    flex justify-center ${ inView ? "plate" : "" }`}>
                    <div className={`grid place-items-center w-full h-full relative z-50 ${ inView ? "fruit-buttons-item" : "" }`}>
                        {fruitItems.length > 0
                        ?
                        fruitItems.map((item) => (
                            <div className={`parent w-[85%] h-[85%] absolute ${ inView ? "item-place" : "" }`}>
                                <img width="100%" src={item} className="absolute top-0 -z-20 "/>
                            </div>
                        ))
                            : <p></p> }
                    </div>
                    <div className={`smoothie-base w-full h-full aspect-square rounded-full opacity-0 absolute ${ inView ? "circle-bg" : "" }`}/>
                </div>
            </div>
            <div className={`col-span-4 grid grid-cols-4 desktop:col-start-1 desktop:col-span-6 desktop:grid-cols-6 ${ inView ? "fruit-buttons" : "" }`}
            >
                <hgroup className="
                    col-span-4 mx-5
                    desktop:col-span-6
                ">
                    <p>Base &gt; <span className="text-pink-500 font-bold">Fruits</span> &gt; Toppings</p>
                    <h1 className="
                        text-grey-900
                        text-2xl
                        desktop:text-5xl
                    ">
                        Add Your Fruits
                    </h1>
                    <h3 className="
                        text-grey-500 text-base
                        font-poppins font-normal
                        mb-4
                        desktop:text-2xl
                    ">
                        Select 
                        <span className="text-pink-500 font-bold"> 3 </span>
                        fruits for your bowl.
                    </h3>
                </hgroup>
                <div className={`
                    col-span-4 h-fit
                    desktop:col-start-1 desktop:col-span-6
                    ${ inView ? "fruit-buttons" : "" }
                `}>
                    <div className="
                        flex flex-row flex-nowrap gap-5 px-5 relative
                        overflow-x-scroll
                        desktop:flex-wrap
                    ">
                        {/* loop through the base ingredients */}
                        {fruitIngredients.map((ingredient) => (
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
            <div className={`
            col-span-4 grid grid-cols-2 mt-4 mx-5
            desktop:col-span-6
            ${ inView ? "fruit-buttons" : "" }
            `}
            >
                <ArrowButton 
                    rotation="rotate-180"
                    onClick={previousStep}
                />
                <div className="flex justify-end">
                    <ArrowButton 
                        onClick={nextStep}
                    />
                </div>
            </div>
        </div>
    );
}

export default Fruits;