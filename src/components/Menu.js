import MenuCard from "./MenuCard";

import BowlBlue from "../assets/hero/bowl-blue.png";
import BowlGreen from "../assets/hero/bowl-green.png";
import BowlPink from "../assets/hero/bowl-pink.png";
import BowlYellow from "../assets/hero/bowl-yellow.png";

function Menu() {
    return (
        <section className="
        p-4 gap-4 relative grid
        bg-grey-100">
            <h2>Our Menu</h2>
            <p className="font-climate text-2xl -mt-4 mb-2">Varies by season</p>
            <MenuCard
                heading="Berry Bowl"
                headingColor="text-pink-900"
                text="Made with freshly picked ingredients from our local farms."
                cardColor="bg-pink-100"

                image={ BowlPink }
                imageAlt="Berry Bowl Image"

                buttonColor="text-white"
                buttonBg="bg-pink-500"
                buttonBorder="border-transparent"

                outlineColor="text-pink-500"
                outlineBorder="border-pink-500"

                pillText1="fruity"
                pillDisplay1="visible"

                pillText2="sweet"
                pillDisplay2="visible"

                pillText3="fruity"
                pillDisplay3="hidden"
            />
            <MenuCard
                heading="Tropical Bowl"
                headingColor="text-yellow-900"
                text="Made with freshly picked ingredients from our local farms."
                cardColor="bg-yellow-100"

                image={ BowlYellow }
                imageAlt="Tropical Bowl Image"

                buttonColor="text-white"
                buttonBg="bg-yellow-500"
                buttonBorder="border-transparent"

                outlineColor="text-yellow-500"
                outlineBorder="border-yellow-500"

                pillText1="fruity"
                pillDisplay1="visible"

                pillText2="refreshing"
                pillDisplay2="visible"

                pillText3="fruity"
                pillDisplay3="hidden"
            />
            <MenuCard
                heading="Power Bowl"
                headingColor="text-blue-900"
                text="Made with freshly picked ingredients from our local farms."
                cardColor="bg-blue-100"

                image={ BowlBlue }
                imageAlt="Power Bowl Image"

                buttonColor="text-white"
                buttonBg="bg-blue-500"
                buttonBorder="border-transparent"

                outlineColor="text-blue-500"
                outlineBorder="border-blue-500"

                pillText1="nutty"
                pillDisplay1="visible"

                pillText2="protein"
                pillDisplay2="visible"

                pillText3="energy"
                pillDisplay3="visible"
            />
            <MenuCard
                heading="Nature Bowl"
                headingColor="text-green-900"
                text="Made with freshly picked ingredients from our local farms."
                cardColor="bg-green-100"

                image={ BowlGreen }
                imageAlt="Nature Bowl Image"

                buttonColor="text-white"
                buttonBg="bg-green-500"
                buttonBorder="border-transparent"

                outlineColor="text-green-500"
                outlineBorder="border-green-500"

                pillText1="earthy"
                pillDisplay1="visible"

                pillText2="tangy"
                pillDisplay2="visible"

                pillText3="earthy"
                pillDisplay3="hidden"
            />
        </section>
    );
}

export default Menu;