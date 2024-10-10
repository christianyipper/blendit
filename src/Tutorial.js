import { Helmet } from "react-helmet-async";

function Tutorial({colorProp}) {
    return (

        // Use Tailwind's classes to style components. You can find all the documentation at tailwindcss.com
        // The classes should auto-complete to help you. You can hover each class for more info
        <section className="w-full h-screen bg-black">

            {/* We use React Helmet to change our metadata in the html head when this component is loaded */}
            {/* NOTE: the data in the helmet will get added at the bottom of the html head (it will not replace current meta tags in the html). So you can add static information to the html that won't change between screens (like theme-color and viewport) */}
            <Helmet>
                <title>Blend it. | Your Bowl, Your Blend, Your Way</title>
                <meta property="og:title" content="Blend it. | Your Bowl, Your Blend, Your Way"/>

                <meta name="description" content="At Blend It, we believe healthy eating should be effortless and fun!"/>
                <meta name="og:description" content="At Blend It, we believe healthy eating should be effortless and fun!"/>

                <meta name="keywords" content="smoothie-bowl"/>

                <meta property="og:url" content="https://blendit.com"/>
            </Helmet>
            
            {/* NOTE: these fonts don't use a class as they were pre-set in index.css */}
            {/* We do this for reusability purposes, avoiding adding a font-family class to each heading every time */}
            <h1 className="text-white">This is Climate Crisis</h1>

            {/* I like to keep related classes on the same line (below I put dimensions on one line, positioning on the next, and colors on the line after) */}
            <div className="
            w-full h-1/6 border-4 gap-4
            flex flex-row justify-center items-center 
            border-green-500 bg-grey-900
            ">
                {/* Below is an example of how to use a mobile breakpoint. I like to put a class's breakpoint right after it, on the same line */}
                {/* Breakpoints can be configured in: tailwind.config.js */}
                <h2 className="text-white absolute left-10 mobile:hidden">Breakpoints</h2>
                <p className="text-pink-100 mobile:text-blue-100">text-pink-100</p>
                <p className="text-pink-500 mobile:text-blue-500">text-pink-500</p>
                <p className="text-pink-900 mobile:text-blue-900">text-pink-900</p>
            </div>

            <div className="
            w-full h-1/6 border-4 gap-4 mt-8
            flex flex-row justify-center items-center 
            border-pink-500 bg-grey-900
            ">
                {/* If we need to use a one-off value that doesn't make sense to include in our theme, we can use square brackets */}
                <h2 className="text-white absolute left-[27px] mobile:hidden">Hover Effects</h2>

                {/* You can also add sudo elements (like hover state) */}
                <p className="text-green-500 hover:bg-pink-500 hover:text-2xl duration-500 ease-in-out">hover-transition</p>
            </div>

            <div className="
            w-full h-1/6 border-4 gap-4 mt-8
            flex flex-row justify-center items-center 
            border-blue-500 bg-grey-900
            ">
                {/* You can also add animations by configuring them in: tailwind.config.js */}
                {/* Animations are called by using "animation-name" */}
                <h2 className="text-white absolute left-10 mobile:hidden">Animations</h2>
                <p className="text-grey-100 animate-shake">looping-animation</p>

                {/* I've added a delay to this animation. You can use "delay-000" but it is less flexible than "animation-delay" used below */}
                {/* REMEMBER: you can use template literals to add props with ${}... in this case, the prop is called in Home.js with the class "text-pink-500" */}
                <p className={`opacity-0 animate-fade animation-delay-1300 ${colorProp}`}>delayed-animation</p>
            </div>
        </section>

        // Be sure to visit the "tailwind.config.js" file
        // This is where we define our custom themes like colors, animations, breakpoints. We can also add tailwind-specific plugins.
    );
}

export default Tutorial;