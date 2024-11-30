import LocationCard from "./LocationCard";

// === images ===
import location1 from "../assets/locations/location1.jpeg";
import location2 from "../assets/locations/location2.jpeg";
import location3 from "../assets/locations/location3.jpeg";

import { useIntersectionAnimation } from './Observer';

function Locations() {
    const animation = useIntersectionAnimation();
    const animationDelay1 = useIntersectionAnimation('animate-fade', 100);
    const animationDelay2 = useIntersectionAnimation('animate-fade', 200);
    const animationDelay3 = useIntersectionAnimation('animate-fade', 300);

    return (
        <section
            id="locations"
            className="
            w-full h-fit
            relative
            scroll-mt-20
            grid items-center
            overflow-hidden
            mobile:grid-cols-1 gap-20 py-5
            desktop:min-h-[920px] desktop:h-full
            bg-yellow-100
            "
        >
            <div
                className="
                    h-fit
                "
            >
                <hgroup
                    ref={animation.ref}
                    className={`
                    ${animation.visibilityClass}
                    px-5
                    mobile:col-span-1
                    `}
                >
                    <h1
                        className="
                        text-grey-900
                        "
                    >
                        Find Us
                    </h1>
                    <h4
                        className="
                        text-grey-500
                        -mt-2 mb-4
                        "
                    >
                        Our locations.
                    </h4>
                </hgroup>
                    <div
                        ref={animationDelay1.ref}
                        className={`
                            ${animationDelay1.visibilityClass}
                            flex flex-row
                            overflow-x-scroll scroll-smooth scrollbar-none
                            w-full gap-4 pb-4
                        `}
                    >
                        <LocationCard
                            image={location1}
                            title={"Blend It on the Green"}
                            line1={"123 Greenway Drive"}
                            line2={"Vancouver, BC V6B 1A1"}
                        />
                        <LocationCard
                            image={location2}
                            title={"Blend It Bayview"}
                            line1={"456 Bayview Crescent West"}
                            line2={"Vancouver, BC V7W 2X3"}
                        />
                        <LocationCard
                            image={location3}
                            title={"Blend It Riverside"}
                            line1={"789 Riverside Road"}
                            line2={"Burnaby, BC V5A 3N9"}
                        />
                    </div>
                </div>
        </section>
    );

}

export default Locations;