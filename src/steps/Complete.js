function Complete({ allIngredients }) {
    return (
        <div>
            <h1 className="text-pink-500 mt-24">Congratulations!</h1>
            <p className="text-grey-500">You have successfully created your smoothie!</p>

            <div className="flex flex-row flex-wrap gap-4">
                {allIngredients.length > 0
                ?
                    allIngredients.map((item) => (
                    <img width="100px" src={item}></img>
                ))
                    : "No items selected"}
                <div 
                    className="smoothie-base rounded-full w-24 h-24"
                ></div>
            </div>

        </div>
    );
}

export default Complete;