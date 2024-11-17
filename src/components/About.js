import AboutCard from "./AboutCard";
import Button from "./Button";

function About() {
    return (
        <section className="
<<<<<<< Updated upstream
        p-4 gap-4 relative grid
        bg-yellow-100
=======
        p-5 flex flex-col
        w-full h-fit
        text-grey-900 bg-yellow-100
        relative
        desktop:m-5 
        desktop:w-[calc(100%-2.5rem)] desktop:h-full
>>>>>>> Stashed changes
        ">
            <h2>About Us</h2>
            <p className="font-climate text-2xl -mt-4 mb-2">Blend it.</p>
            <AboutCard
                heading="Who We Are"
                text="Blend It was founded by three individuals with a shared vision: to bring fresh, nutritious smoothie bowls to the West Coast in the most fun and convenient way possible. With backgrounds in health, technology, and food service, our team is united by a passion for innovation and customer satisfaction. We’ve combined our expertise to create a platform that puts you in control, ensuring every bowl you create is as satisfying as it is healthy."
            />
            <AboutCard
                heading="What We Do"
                text="At Blend It, we don’t just serve smoothie bowls; we deliver a fresh and interactive experience unlike any other. What sets us apart is our fully customizable ordering system, allowing you to craft the perfect blend tailored to your tastes and preferences. Whether you're craving something fruity, nutty, or protein-packed, you have the power to choose every ingredient that goes into your bowl. It’s your smoothie, your way—no compromises. Convenience and healthy eating go hand in hand with our easy-to-use online platform, making it simple to enjoy a nutritious meal, anytime, anywhere."
            />
            <AboutCard
                heading="Why Choose Us"
                text="We are on a mission to revolutionize the traditional online ordering experience. At Blend It, we believe that healthy eating should not only be effortless but also enjoyable. That's why we’ve created a fully interactive and customizable ordering system that empowers you to be the architect of your perfect smoothie bowl. Every click brings you closer to a meal that fits your lifestyle, with ingredients that match your unique preferences."
            />
            <div className="flex flex-col items-center my-4">
                <Button
                    text="Order Now"
                    color="text-white"
                    bg="bg-pink-500"
                    border="border-transparent"
                />
            </div>
        </section>
    );
}

export default About;