import React, { useState, useEffect } from 'react';

import heroLogo from '../assets/hero/hero-logo.svg';
import bowlPink from '../assets/hero/bowl-pink.png';
import bowlYellow from '../assets/hero/bowl-yellow.png';
import bowlBlue from '../assets/hero/bowl-blue.png';
import bowlGreen from '../assets/hero/bowl-green.png';

import { useIntersectionAnimation } from './Observer';

const SpinningBowlSelector = ({ selectedBowl, bowls, circleColor }) => {
    // Calculate the angle of each bowl in the circle
    const bowlCount = bowls.length;
    const angle = 360 / bowlCount;
    const radius = 400;

    return (
        <div className="
            relative 
            mx-auto 
            w-full h-full
            scale-1
            desktop:scale-150
        ">
            {/* Background circle */}
            <div 
                className="
                    absolute 
                    top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2
                    transition-colors duration-300 mix-blend-multiply"
                style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" className={`${circleColor} transition-colors duration-300`} />
                </svg>
            </div>
            
            {/* Render the bowls */}
            <div 
                className="
                    animate-simpleFade animation-delay-900 opacity-0
                    w-full h-full 
                    transition-transform duration-500 ease-in-out z-10"
                style={{ transform: `rotate(${-selectedBowl * angle}deg)` }}
            >
                {bowls.map((bowl, index) => {
                    // Calculate the angle of each bowl
                    const bowlAngle = index * angle;
                    // Calculate the x and y coordinates of each bowl
                    const x = Math.sin((bowlAngle * Math.PI) / 180) * radius;
                    const y = -Math.cos((bowlAngle * Math.PI) / 180) * radius;
                    
                    return (
                        <div
                            key={index}
                            className="
                                absolute top-1/2 left-1/2 
                                size-52 
                                transition-all duration-300"
                            style={{
                                // Move the bowl to the correct position in the circle
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${selectedBowl * angle}deg)`,
                            }}
                        >
                            {/* Render the bowl image */}
                            <img 
                                src={bowl} 
                                alt={`Smoothie Bowl ${index + 1}`} 
                                className={`
                                    w-full h-full 
                                    object-cover 
                                    rounded-full 
                                    transition-all duration-300 
                                    ${index === selectedBowl ? 'scale-125 shadow-lg' : 'scale-100'}
                                `}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function Hero() {
    const animation = useIntersectionAnimation();
    const animationDelay1 = useIntersectionAnimation('animate-fade', 100);
    const animationDelay2 = useIntersectionAnimation('animate-fade', 200);
    const animationDelay3 = useIntersectionAnimation('animate-fade', 300);

    // State variables for selected bowl and color scheme
    const [selectedBowl, setSelectedBowl] = useState(0);
    const bowls = [bowlPink, bowlYellow, bowlGreen, bowlBlue];
    
    // Color schemes for different bowls
    const colorSchemes = [
        { primary: 'bg-pink-900', secondary: 'fill-pink-100', text: 'text-pink-900', circle: 'fill-pink-500' },
        { primary: 'bg-yellow-900', secondary: 'fill-yellow-100', text: 'text-yellow-900', circle: 'fill-yellow-500' },
        { primary: 'bg-green-900', secondary: 'fill-green-100', text: 'text-green-900', circle: 'fill-green-500' },
        { primary: 'bg-blue-900', secondary: 'fill-blue-100', text: 'text-blue-900', circle: 'fill-blue-500' },
    ];

    const [colorScheme, setColorScheme] = useState(colorSchemes[0]);

    // Update the color scheme whenever the selected bowl changes
    useEffect(() => {
        setColorScheme(colorSchemes[selectedBowl]);
    }, [selectedBowl]);

    return (
        <section className="
            animate-simpleFade
            w-full h-full grid
            grid-cols-4 p-5 gap-20
            relative 
            overflow-hidden
            bg-background
            mt-20
            desktop:grid-cols-12
            desktop:min-h-[920px]
        ">
            <svg viewBox="0 0 100 100" className="animate-fade w-full h-full absolute block desktop:hidden">
                    <circle cx={'140%'} cy={'0%'} r={'100%'} className={`${colorScheme.secondary} transition-colors duration-300`} />
            </svg>

            <svg viewBox="0 0 50 50" className=" w-full h-full absolute hidden mix-blend-multiply opacity-0 animate-simpleFade animation-delay-400 desktop:block">
                    <circle cx={'-30%'} cy={'50%'} r={'70%'} className={`${colorScheme.secondary} transition-colors duration-300`} />
            </svg>

            <svg viewBox="0 0 50 50" className="w-full h-full absolute hidden mix-blend-multiply opacity-0 animate-simpleFade animation-delay-600 desktop:block">
                    <circle cx={'35%'} cy={'100%'} r={'40%'} className={`${colorScheme.circle} transition-colors duration-300 opacity-60`} />
            </svg>

            <div className="
                col-span-4 
                flex flex-col gap-4
                justify-start
                z-[2]
                desktop:col-span-6 desktop:gap-8 desktop:justify-center
            ">
                <h4 ref={animationDelay1.ref} className={` transition-colors duration-300 ${colorScheme.text} ${animationDelay1.visibilityClass}`}>
                    Top it. Love it.
                </h4>
                <img
                    ref={animationDelay2.ref}
                    className={`
                        ${animationDelay2.visibilityClass}
                        w-full max-w-md 
                        transition-filter duration-300
                        `}
                        src={heroLogo}
                        alt="Blend It."
                        style={{ filter: `hue-rotate(${selectedBowl * 90}deg)` }}
                />
                <p className='animate-fade text-grey-900 desktop:w-5/6'>
                    Welcome to Blend It, where healthy eating is effortless and fun! Order fresh nutritious smoothie bowls with uniquely interactive and customizable ordering experience. We put the power of choice in your own hands!
                </p>
                <div  ref={animationDelay1.ref} className={`${animationDelay1.visibilityClass} flex gap-5 justify-center desktop:justify-start`}>
                    <a className={`
                        w-fit 
                        py-3 px-6 
                        text-white 
                        rounded-full 
                        text-nowrap 
                        ${colorScheme.primary}
                        ${colorScheme.text.replace('text', 'border')} border-2
                        hover:scale-95
                        transition-all
                    `}
                        href="/builder"
                    >
                        Customize
                    </a>
                    <a className={`
                        w-fit 
                        py-3 px-6 
                        rounded-full 
                        text-nowrap 
                        bg-white border-2
                        ${colorScheme.text}
                        ${colorScheme.text.replace('text', 'border')} 
                        hover:scale-95
                        transition-all  
                    `}
                        href="#menu"
                    >
                        View Menu
                    </a>
                </div>
                <div ref={animationDelay2.ref} className={`${animationDelay2.visibilityClass} opacity-0 flex gap-3 justify-center mt-6 desktop:justify-start desktop:mt-0`}>
                    {bowls.map((bowl, index) => (
                        <img
                            key={index}
                            src={bowl}
                            alt={`Smoothie Bowl ${index + 1}`}
                            className={`size-20 cursor-pointer rounded-full shadow-md desktop:size-24 hover:scale-95 transition-scale duration-300`} 
                            onClick={() => setSelectedBowl(index)}
                        />
                    ))}
                </div>
            </div>

            <section className="
                opacity-0 animate-simpleFade animation-delay-300
                col-span-4 
                flex align-end 
                mt-80
                rotate-0
                translate-y-40
                translate-x-0
                desktop:col-span-6
                desktop:-rotate-45
                desktop:translate-y-80 
                desktop:translate-x-80
            ">
                <SpinningBowlSelector selectedBowl={selectedBowl} bowls={bowls} circleColor={colorScheme.secondary} />
            </section>
        </section>
    );
}

export default Hero;
