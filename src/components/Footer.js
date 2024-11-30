import logo from '../assets/icons/BlendIt-Full.svg'
import { useIntersectionAnimation } from './Observer';

function Footer() {
    const animation = useIntersectionAnimation();
    const animationDelay1 = useIntersectionAnimation('animate-fade', 100);
    const animationDelay2 = useIntersectionAnimation('animate-fade', 200);
    const animationDelay3 = useIntersectionAnimation('animate-fade', 300);

    return (
        <section className="
            bg-grey-100
            w-full max-w-[1920px] grid relative
            grid-cols-4 gap-y-20 m-auto p-5
            scroll-mt-20
            desktop:grid-cols-12 desktop:gap-x-6
            ">
            <hgroup
                className="
                col-span-4 z-10
                "
            >
                <h2 ref={animation.ref} className={`text-pink-500 ${animation.visibilityClass}`}>Blend It.</h2>
                <h2 ref={animationDelay1.ref} className={`text-pink-900 ${animationDelay1.visibilityClass}`}>Top It.</h2>
                <h2 ref={animationDelay2.ref} className={`text-pink-900 ${animationDelay2.visibilityClass}`}>Love It.</h2>
                <a className="text-grey-500" href="mailto:hello@blendit.com">hello@blendit.com</a>
            </hgroup>
            <div
                className="
                col-span-4
                desktop:col-start-8 desktop:col-span-5
                "
            >
                <h4 className={` text-grey-500 mb-4`}>Get in Touch!</h4>
                <form className="
                    flex flex-col gap-4 items-center
                    desktop:items-end
                    "
                >
                    <input
                        ref={animation.ref}
                        className={`
                            ${animation.visibilityClass}
                            border-[1px] border-pink-500
                            p-5 rounded-xl w-full z-10
                        `}
                        required="required"
                        type="text"
                        placeholder="Name"
                    />
                    <input 
                        ref={animationDelay1.ref}
                        className={`
                            ${animationDelay1.visibilityClass}
                            border-[1px] border-pink-500
                            p-5 rounded-xl w-full z-10
                        `}
                        required="required"
                        type="phone"
                        placeholder="Phone Number"
                    />
                    <input
                        ref={animationDelay2.ref}
                        className={`
                            ${animationDelay2.visibilityClass}
                            border-[1px] border-pink-500
                            p-5 rounded-xl w-full z-10
                        `}
                        required="required"
                        type="email"
                        placeholder="Email Address"
                    />
                    <textarea
                        ref={animationDelay3.ref}
                        className={`
                            ${animationDelay3.visibilityClass}
                            border-[1px] border-pink-500
                            p-5 rounded-xl w-full z-10
                            opacity-0
                        `}
                        required="required"
                        placeholder="Your Message"
                    />
                    <button
                        ref={animationDelay1.ref}
                        className={`
                            ${animationDelay1.visibilityClass}
                            w-fit bg-pink-500 text-white
                            py-3 px-10 rounded-full z-10
                            hover:scale-95
                            transition-all
                            opacity-0
                        `}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ul
                className="
                flex flex-col gap-5
                col-span-2 z-10
                desktop:col-span-2
                ">
                <li><a href="#">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <div className="
                h-full w-full z-10
                col-start-3 col-span-2
                desktop:col-start-11
                desktop:grid desktop:place-items-end
            " 
            >
                <img
                    className="
                    w-full
                    "
                    alt="Blend It."
                    src={logo}
                />  
            </div>
            <svg 
                className="
                w-full h-full
                absolute z-0
                fill-pink-100
                
                "
                xmlns="http://www.w3.org/2000/svg">
                <circle 
                    className="
                    -translate-y-1/4
                    desktop:scale-150 desktop:-translate-x-3/4 desktop:-translate-y-1/2
                    "
                    r="350"
                    cx={'100%'}
                    cy={'100%'}
                />
            </svg>
        </section>
    );
}

export default Footer;
