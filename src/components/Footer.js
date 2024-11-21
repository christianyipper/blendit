import logo from '../assets/icons/BlendIt-Full.svg'

function Footer() {
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
                col-span-4
                "
            >
                <h2 className="text-pink-500">Blend It.</h2>
                <h2 className="text-pink-900">Top It.</h2>
                <h2 className="text-pink-900">Love It.</h2>
                <a className="text-grey-500" href="mailto:hello@blendit.com">hello@blendit.com</a>
            </hgroup>
            <div
                className="
                col-span-4
                desktop:col-start-8 col-span-5
                "
            >
                <h4 className="text-grey-500 mb-4">Get in Touch!</h4>
                <form className="
                    flex flex-col gap-4 items-center
                    desktop:items-end
                    "
                >
                    <input
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full z-10
                        "
                        required="required"
                        type="text"
                        placeholder="Name"
                    />
                    <input 
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full z-10
                        "
                        required="required"
                        type="phone"
                        placeholder="Phone Number"
                    />
                    <input
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full z-10
                        "
                        required="required"
                        type="email"
                        placeholder="Email Address"
                    />
                    <textarea
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full z-10
                        "
                        required="required"
                        placeholder="Your Message"
                    />
                    <button
                        className="
                        w-fit bg-pink-500 text-white
                        py-3 px-10 rounded-full z-10
                        "
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ul
                className="
                flex flex-col gap-5
                col-span-1
                desktop:col-span-2
                ">
                <li><a href="#">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <div
                className="
                flex flex-col gap-5 justify-between items-end
                col-span-3
                desktop:items-start
                ">
                <p 
                    className="
                    text-grey-900
                    font-bold
                    "
                >
                    Order Ahead
                </p>
                <button
                    className="
                    bg-pink-500
                    text-white text-nowrap
                    w-fit py-3 px-6 rounded-full
                    ">
                    Blend your Bowl
                </button>
            </div>
            <div className="
                h-full w-full z-10
                col-start-2 col-span-2
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
