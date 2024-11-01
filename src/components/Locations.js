import LocationCard from "./LocationCard";

// === images ===
import location1 from "../assets/locations/location1.jpeg";
import location2 from "../assets/locations/location2.jpeg";
import location3 from "../assets/locations/location3.jpeg";

function Locations() {

    return (
        <section
            className="
            w-full h-fit
            relative
            grid
            mobile:grid-cols-1 gap-20 py-5
            bg-yellow-100
            "
        >
            <hgroup
                className="
                px-5
                mobile:col-span-1
                "
            >
                <h1
                    className="
                    text-grey-900
                    "
                >
                    Find us at:
                </h1>
                <h4
                    className="
                    text-grey-900
                    "
                >
                    Our Locations.
                </h4>
            </hgroup>
                <div
                    className="
                    flex flex-row
                    overflow-x-scroll scroll-smooth scrollbar-none
                    w-full h-full
                    gap-4
                    "
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
            

        </section>
    );

}

export default Locations;