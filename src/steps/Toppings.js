import Button from "../components/Button";

function Toppings({ nextStep, currentStep, previousStep, updateIngredients, selectedIngredients, allIngredients }) {
    return (
        <div>
            <h1 className="text-pink-500 mt-24">Step {currentStep}</h1>
                <Button 
                    text="Previous"
                    color="text-white"
                    bg="bg-pink-500"
                    border="border-pink-500"
                    onClick={previousStep}
                />
                    <Button 
                        text="Granola"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Granola")}
                    />
                    <Button 
                        text="Pepitas"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Pepitas")}
                    />
                    <Button 
                        text="Cacao Nibs"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Cacao Nibs")}
                    />
                    <Button 
                        text="Coconut Shavings"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Coconut Shavings")}
                    />
                    <Button 
                        text="Peanut Butter"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Peanut Butter")}
                    />
                    <Button 
                        text="Chocolate Drizzle"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Chocolate Drizzle")}
                    />
                <Button 
                    text="Next"
                    color="text-white"
                    bg="bg-pink-500"
                    border="border-pink-500"
                    onClick={nextStep}
                />
                <p className="text-grey-500">
                    {/* if the order has less than 1 item, display a message 
                        if the order has more than 1 item, display the order with a comma*/}
                    Current Order: {selectedIngredients.length > 0 ? selectedIngredients.join(', ') : "No items selected"}
                </p>
                <p className="text-grey-900 font-bold">
                    {/* if the order has less than 1 item, display a message 
                        if the order has more than 1 item, display the order with a comma*/}
                    Full Order: {allIngredients.length > 0 ? allIngredients.join(', ') : "No items selected"}
                </p>
        </div>
    );
}

export default Toppings;