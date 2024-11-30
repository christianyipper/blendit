import MenuCard from "./MenuCard";

import BowlBlue from "../assets/hero/bowl-blue.png";
import BowlGreen from "../assets/hero/bowl-green.png";
import BowlPink from "../assets/hero/bowl-pink.png";
import BowlYellow from "../assets/hero/bowl-yellow.png";

import { useIntersectionAnimation } from './Observer';

function Menu() {
    const animation = useIntersectionAnimation();
    const animationDelay1 = useIntersectionAnimation('animate-fade', 100);
    const animationDelay2 = useIntersectionAnimation('animate-fade', 200);
    const animationDelay3 = useIntersectionAnimation('animate-fade', 300);

    return (
        <section className="grid items-center p-4 bg-grey-100 desktop:min-h-[920px] desktop:h-full">
            <div id="menu" className="relative grid scroll-mt-20">
                <hgroup ref={animation.ref} className={animation.visibilityClass}>
                    <h2 className="
                        text-grey-900
                    ">
                        Our Menu
                    </h2>
                    <h4 className="
                        text-grey-500
                        -mt-2 mb-4
                    ">
                        Varies by season.
                    </h4>
                </hgroup>
                    
                    {/* Container for cards with responsive grid */}
                    <div ref={animationDelay1.ref} className={`flex flex-row flex-wrap gap-4 justify-center mb-10 ${animationDelay1.visibilityClass}`}>
                        <MenuCard
                            heading="Berry Bowl"
                            headingColor="text-pink-900"
                            text="Made with freshly picked ingredients from our local farms."
                            cardColor="bg-pink-100"
                            image={BowlPink}
                            imageAlt="Berry Bowl Image"
                            buttonColor="text-white"
                            buttonBg="bg-pink-900"
                            buttonBorder="border-transparent"
                            outlineColor="text-pink-900"
                            outlineBorder="border-pink-900"
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
                            image={BowlYellow}
                            imageAlt="Tropical Bowl Image"
                            buttonColor="text-white"
                            buttonBg="bg-yellow-900"
                            buttonBorder="border-transparent"
                            outlineColor="text-yellow-900"
                            outlineBorder="border-yellow-900"
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
                            image={BowlBlue}
                            imageAlt="Power Bowl Image"
                            buttonColor="text-white"
                            buttonBg="bg-blue-900"
                            buttonBorder="border-transparent"
                            outlineColor="text-blue-900"
                            outlineBorder="border-blue-900"
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
                            image={BowlGreen}
                            imageAlt="Nature Bowl Image"
                            buttonColor="text-white"
                            buttonBg="bg-green-900"
                            buttonBorder="border-transparent"
                            outlineColor="text-green-900"
                            outlineBorder="border-green-900"
                            pillText1="earthy"
                            pillDisplay1="visible"
                            pillText2="tangy"
                            pillDisplay2="visible"
                            pillText3="earthy"
                            pillDisplay3="hidden"
                        />
                    </div>
            </div>
        </section>
    );
}

export default Menu;