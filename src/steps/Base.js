import Button from "../components/Button";



function Base({ nextStep, currentStep, updateIngredients, selectedIngredients, allIngredients }) {
    return (
        <div>
            <h1 className="text-pink-500 mt-24">Step {currentStep}</h1>
                    <Button 
                        text="Blueberry"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Blueberry")}
                    />
                    <Button 
                        text="Strawberry"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Strawberry")}
                    />
                    <Button 
                        text="Mango"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Mango")}
                    />
                    <Button 
                        text="Banana"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Banana")}
                    />
                    <Button 
                        text="Raspberry"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Raspberry")}
                    /><Button 
                        text="Raspberry"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Raspberry")}
                    />
                    <Button 
                        text="Acai"
                        color="text-pink-500"
                        bg="transparent"
                        border="border-pink-500"
                        onClick={() => updateIngredients("Acai")}
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

export default Base;