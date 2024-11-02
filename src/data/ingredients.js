/**
 * Usage Guide:
 * 
 * 1. Accessing Data:
 *    Retrieve ingredient data by calling `smoothieData` and helper functions like `getBaseRGB()`
 *    or `getLayoutImage()` for specific ingredient properties. Each ingredient includes fields for
 *    `image` (pre-imported at the top) and `name`, making it easy to reference images and display
 *    names within React components.
 * 
 * 2. Using Images and Names:
 *    Images are pre-imported at the top of this file to simplify access throughout the project.
 *    You can directly use `ingredient.image` and `ingredient.name` in your component `src` and `alt`
 *    attributes, or display text. For example:
 *    
 *    ```jsx
 *    <img src={ingredient.image} alt={ingredient.name} />
 *    <span>{ingredient.name}</span>
 *    ```
 *
 */


// Base Ingredients
import BlueberryImage from '../ingredients/base/Blueberry.png';
import BananaImage from '../ingredients/base/Banana.png';
import StrawberryImage from '../ingredients/base/Strawberry.png';
import MangoImage from '../ingredients/base/Mango.png';
import RaspberryImage from '../ingredients/base/Raspberry.png';
import AcaiImage from '../ingredients/base/Acai.png';

// Fruit Ingredients
import BananaSlicedImage from '../ingredients/fruits/BananaSliced.png';
import BananaSlicedLayoutImage from '../ingredients/fruits/layout/BananaSliced.png';
import StrawberrySlicedImage from '../ingredients/fruits/StrawberrySliced.png';
import StrawberrySlicedLayoutImage from '../ingredients/fruits/layout/StrawberrySliced.png';
import BlueberriesImage from '../ingredients/fruits/Blueberries.png';
import BlueberriesLayoutImage from '../ingredients/fruits/layout/Blueberries.png';
import BlackberriesImage from '../ingredients/fruits/Blackberries.png';
import BlackberriesLayoutImage from '../ingredients/fruits/layout/Blackberries.png';
import PineappleImage from '../ingredients/fruits/Pineapple.png';
import PineappleLayoutImage from '../ingredients/fruits/layout/Pineapple.png';
import KiwiImage from '../ingredients/fruits/Kiwi.png';
import KiwiLayoutImage from '../ingredients/fruits/layout/Kiwi.png';

// Topping Ingredients
import CacaoNibsImage from '../ingredients/toppings/CacaoNibs.png';
import ChocolateImage from '../ingredients/toppings/Chocolate.png';
import CoconutImage from '../ingredients/toppings/Coconut.png';
import GranolaImage from '../ingredients/toppings/Granola.png';
import PeanutButterImage from '../ingredients/toppings/PeanutButter.png';
import PepitasImage from '../ingredients/toppings/Pepitas.png';


export const smoothieData = {
    steps: [
        {
            id: 'base',
            title: 'Choose Your Base',
            ingredients: [
                { 
                    id: 'blueberry-base', 
                    name: 'Blueberry', 
                    image: BlueberryImage,
                    rgb: [75, 0, 130]
                },
                { 
                    id: 'banana-base', 
                    name: 'Banana', 
                    image: BananaImage,
                    rgb: [255, 225, 53]
                },
                { 
                    id: 'strawberry-base', 
                    name: 'Strawberry', 
                    image: StrawberryImage,
                    rgb: [255, 105, 180]
                },
                { 
                    id: 'mango-base', 
                    name: 'Mango', 
                    image: MangoImage,
                    rgb: [255, 179, 71]
                },
                { 
                    id: 'raspberry-base', 
                    name: 'Raspberry', 
                    image: RaspberryImage,
                    rgb: [227, 11, 93]
                },
                { 
                    id: 'acai-base', 
                    name: 'Acai', 
                    image: AcaiImage,
                    rgb: [75, 0, 130]
                },
            ],
        },
        {
            id: 'fruit',
            title: 'Add Your Fruits',
            ingredients: [
                { 
                    id: 'banana-sliced', 
                    name: 'Banana Slices', 
                    image: BananaSlicedImage,
                    layoutImage: BananaSlicedLayoutImage
                },
                { 
                    id: 'strawberry-sliced', 
                    name: 'Strawberry Slices', 
                    image: StrawberrySlicedImage,
                    layoutImage: StrawberrySlicedLayoutImage
                },
                { 
                    id: 'blueberries', 
                    name: 'Blueberries', 
                    image: BlueberriesImage,
                    layoutImage: BlueberriesLayoutImage
                },
                { 
                    id: 'blackberries', 
                    name: 'Blackberries', 
                    image: BlackberriesImage,
                    layoutImage: BlackberriesLayoutImage
                },
                { 
                    id: 'pineapple', 
                    name: 'Pineapple', 
                    image: PineappleImage,
                    layoutImage: PineappleLayoutImage
                },
                { 
                    id: 'kiwi', 
                    name: 'Kiwi', 
                    image: KiwiImage,
                    layoutImage: KiwiLayoutImage
                },
            ],
        },
        {
            id: 'topping',
            title: 'Choose Your Toppings',
            ingredients: [
                { 
                    id: 'cacao-nibs', 
                    name: 'Cacao Nibs', 
                    image: CacaoNibsImage
                },
                { 
                    id: 'chocolate', 
                    name: 'Chocolate', 
                    image: ChocolateImage
                },
                { 
                    id: 'coconut', 
                    name: 'Coconut', 
                    image: CoconutImage
                },
                { 
                    id: 'granola', 
                    name: 'Granola', 
                    image: GranolaImage
                },
                { 
                    id: 'peanut-butter', 
                    name: 'Peanut Butter', 
                    image: PeanutButterImage
                },
                { 
                    id: 'pepitas', 
                    name: 'Pepitas', 
                    image: PepitasImage
                },
            ],
        },
    ]
};

export const getLayoutImage = (fruitId) => {
    const fruit = smoothieData.steps[1].ingredients.find(item => item.id === fruitId);
    return fruit ? fruit.layoutImage : null;
};

export const getBaseRGB = (baseId) => {
    const base = smoothieData.steps[0].ingredients.find(item => item.id === baseId);
    return base ? base.rgb : [245, 230, 211];
};

// Example:
// const blueberry = getBaseRGB('blueberry-base');  // [75, 0, 130]