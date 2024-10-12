import React, { useState, useEffect } from 'react';
import heroLogo from '../assets/hero/hero-logo.svg';
import bowlPink from '../assets/hero/bowl-pink.png';
import bowlYellow from '../assets/hero/bowl-yellow.png';
import bowlBlue from '../assets/hero/bowl-blue.png';
import bowlGreen from '../assets/hero/bowl-green.png';

const SpinningBowlSelector = ({ selectedBowl, bowls, circleColor }) => {
    // Calculate the angle of each bowl in the circle
    const bowlCount = bowls.length;
    const angle = 360 / bowlCount;
    // Calculate the radius of the circle
    const radius = 290;

    return (
        <div className="relative mx-auto w-full h-full">
            {/* Background circle */}
            <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] transition-colors duration-300`}
                style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                }}
            >
                {/* Render the circle background */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" className={`${circleColor} transition-colors duration-300`} />
                </svg>
            </div>
            
            {/* Render the bowls */}
            <div 
                className="w-full h-full transition-transform duration-500 ease-in-out"
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
                            className="absolute top-1/2 left-1/2 size-52 transition-all duration-300"
                            style={{
                                // Move the bowl to the correct position in the circle
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${selectedBowl * angle}deg)`,
                            }}
                        >
                            {/* Render the bowl image */}
                            <img 
                                src={bowl} 
                                alt={`Smoothie Bowl ${index + 1}`} 
                                className={`w-full h-full object-cover rounded-full transition-all duration-300 ${index === selectedBowl ? 'scale-125 shadow-lg' : 'scale-100'}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function Hero() {
    // State variables for selected bowl and color scheme
    const [selectedBowl, setSelectedBowl] = useState(0);
    const bowls = [bowlPink, bowlYellow, bowlGreen, bowlBlue];
    
    // Color schemes for different bowls
    const colorSchemes = [
        { primary: 'bg-pink-500', secondary: 'fill-pink-100', text: 'text-pink-900' },
        { primary: 'bg-yellow-500', secondary: 'fill-yellow-100', text: 'text-yellow-900' },
        { primary: 'bg-green-500', secondary: 'fill-green-100', text: 'text-green-900' },
        { primary: 'bg-blue-500', secondary: 'fill-blue-100', text: 'text-blue-900' }
    ];

    const [colorScheme, setColorScheme] = useState(colorSchemes[0]);

    // Update the color scheme whenever the selected bowl changes
    useEffect(() => {
        setColorScheme(colorSchemes[selectedBowl]);
    }, [selectedBowl]);

    return (
        <section className="w-full h-screen grid relative overflow-hidden p-5 bg-background mobile:grid-cols-4">
            <div className="col-span-4 flex flex-col gap-5 mt-10">
                <h3 className={`transition-colors duration-300 ${colorScheme.text}`}>
                    {/* Title is pink by default, and changes color based on the selected bowl */}
                    Top it. Love it.
                </h3>
                <img
                    className="w-full max-w-md transition-filter duration-300"
                    alt="Blend It."
                    src={heroLogo}
                    style={{ filter: `hue-rotate(${selectedBowl * 90}deg)` }}
                />
                <p>
                    {/* Text is pink by default, and changes color based on the selected bowl */}
                    Welcome to Blend It, where healthy eating is effortless and fun! Order fresh nutritious smoothie bowls with uniquely interactive and customizable ordering experience. We put the power of choice in your own hands!
                </p>
                <div className='flex gap-5 justify-center'>
                    {/* Buttons are pink by default, and change color based on the selected bowl */}
                    <button className={`w-fit text-white py-3 px-6 rounded-full text-nowrap transition-colors duration-300 ${colorScheme.primary}`}>
                        Customize
                    </button>
                    <button className={`w-fit py-3 px-6 rounded-full text-nowrap transition-colors duration-300 border-2 ${colorScheme.text.replace('text', 'border')} ${colorScheme.text}`}>
                        View Menu
                    </button>
                </div>
                <div className='flex gap-3 justify-center mt-6'>
                    {/* Bowl images are pink by default, and change color based on the selected bowl */}
                    {bowls.map((bowl, index) => (
                        <img
                            key={index}
                            src={bowl}
                            alt={`Smoothie Bowl ${index + 1}`}
                            className='size-20 cursor-pointer rounded-full'
                            onClick={() => setSelectedBowl(index)}
                        />
                    ))}
                </div>
            </div>

            <section className='col-span-4 translate-y-40 flex align-end mt-10 min-h-full'>
                <SpinningBowlSelector selectedBowl={selectedBowl} bowls={bowls} circleColor={colorScheme.secondary} />
            </section>
        </section>
    );
}

export default Hero;