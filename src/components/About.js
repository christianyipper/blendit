import AboutCard from "./AboutCard";
import ButtonLink from "./ButtonLink";

function About() {
    return (
        <section
            id="about"
            className="
                bg-grey-100
                desktop:p-5 
                desktop:min-h-[920px]
                "
        >
            <div 
                className="
                p-5 flex flex-col justify-center
                w-full h-fit
                bg-yellow-100
                relative
                scroll-mt-20
                desktop:w-full
                desktop:min-h-[880px] desktop:h-full
                "
            >
                <svg 
                    className="
                    -m-5
                    w-full h-full
                    absolute
                    fill-yellow-500 mix-blend-multiply
                    desktop:opacity-50
                    "
                    xmlns="http://www.w3.org/2000/svg">
                    <circle 
                        r="400"
                        cx={'100%'}
                        cy={'90%'}
                    />
                </svg>
                <svg 
                    className="
                    hidden
                    -m-5
                    w-full h-full
                    absolute
                    fill-yellow-500 mix-blend-multiply
                    desktop:block
                    "
                    xmlns="http://www.w3.org/2000/svg">
                    <circle 
                        className="
                        -translate-x-1/2 translate-y-1/4
                        "
                        r="400"
                        cx={'100%'}
                        cy={'90%'}
                    />
                </svg>
                <svg 
                    className="
                    -m-5
                    w-full h-full
                    absolute
                    fill-yellow-500 opacity-50 mix-blend-multiply
                    "
                    xmlns="http://www.w3.org/2000/svg">
                    <circle 
                        className="
                        -translate-x-[150%] -translate-y-1/4
                        desktop:-translate-x-1/2 desktop:translate-y-1/3 desktop:scale-75
                        "
                        r="600"
                        cx={'100%'}
                        cy={'90%'}
                    />
                </svg>
                <hgroup>
                    <h2 className=
                        "text-grey-900"
                    >About Us</h2>
                    <h4 className="
                        text-grey-500
                        -mt-2 mb-4
                    ">
                        Blend it.
                    </h4>
                </hgroup>
                    <div className="
                        flex flex-col gap-4
                        desktop:flex-row
                    ">
                        <AboutCard
                            heading="Who We Are"
                            text="Blend It was founded by three individuals with a shared vision: to bring fresh, nutritious smoothie bowls to the West Coast in the most fun and convenient way possible. With backgrounds in health, technology, and food service, our team is united by a passion for innovation and customer satisfaction."
                        />
                        <AboutCard
                            heading="What We Do"
                            text="At Blend It, we don’t just serve smoothie bowls; we deliver a fresh and interactive experience unlike any other. What sets us apart is our fully customizable ordering system, allowing you to craft the perfect blend tailored to your tastes and preferences. Whether you're craving something fruity, nutty, or protein-packed, you have the power to choose every ingredient that goes into your bowl."
                        />
                        <AboutCard
                            heading="Why Choose Us"
                            text="We are on a mission to revolutionize the traditional online ordering experience. At Blend It, we believe that healthy eating should not only be effortless but also enjoyable. That's why we’ve created a fully interactive and customizable ordering system that empowers you to be the architect of your perfect smoothie bowl.."
                        />
                    </div>
                <div className="flex flex-col items-center my-4 relative z-10">
                    <ButtonLink
                        text="Order Now"
                        color="text-white"
                        bg="bg-pink-500"
                        border="border-transparent"
                        link="builder"
                    />
                </div>
            </div>
        </section>

    );
}

export default About;