import { useState, useEffect, useRef } from 'react';

export const useIntersectionAnimation = (
        animationClass = 'animate-fade', 
        delay = 0
    ) => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);
    
        useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                setIsVisible(true);
                }, delay);
            }
            },
            { threshold: 0.1 }
        );
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    
        return () => {
            if (ref.current) {
            observer.unobserve(ref.current);
            }
        };
        }, [delay]);
    
        const visibilityClass = isVisible 
        ? `${animationClass} animation-delay-${delay}` 
        : 'opacity-0';
    
        return { ref, visibilityClass };
};