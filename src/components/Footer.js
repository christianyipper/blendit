import logo from '../assets/icons/BlendIt-Full.svg'

function Footer() {
    return (
        <section className="
            w-full grid
            relative
            mobile:grid-cols-4 gap-20 p-5
            ">
            <hgroup
                className="col-span-4"
            >
                <h2 className="text-pink-500">Blend It.</h2>
                <h2 className="text-pink-900">Top It.</h2>
                <h2 className="text-pink-900">Love It.</h2>
                <a className="text-grey-500" href="mailto:hello@blendit.com">hello@blendit.com</a>
            </hgroup>
            <div
                className="col-span-4"
            >
                <h4 className="text-grey-500 mb-4">Get in Touch!</h4>
                <form className="flex flex-col gap-4 items-center">
                    <input
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full
                        "
                        required="required"
                        type="text"
                        placeholder="Name"
                    />
                    <input 
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full
                        "
                        required="required"
                        type="phone"
                        placeholder="Phone Number"
                    />
                    <input
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full
                        "
                        required="required"
                        type="email"
                        placeholder="Email Address"
                    />
                    <textarea
                        className="
                        border-[1px] border-pink-500
                        p-5 rounded-xl w-full
                        "
                        required="required"
                        placeholder="Your Message"
                    />
                    <button
                        className="
                        w-fit bg-pink-500 text-white
                        py-3 px-10 rounded-full
                        "
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ul
                className="
                flex flex-col gap-5
                mobile: col-span-1
                ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div
                className="
                flex flex-col gap-5 justify-between items-end
                mobile: col-span-3
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
            <img
                className="
                w-full
                mobile:col-start-2 col-span-2
                "
                alt="Blend It."
                src={logo}
            />  
            <svg 
                className="
                w-full h-full
                absolute -z-10
                fill-pink-100
                "
                xmlns="http://www.w3.org/2000/svg">
                <circle 
                    r="300"
                    cx={'100%'}
                    cy={'75%'}
                />
            </svg>
        </section>
    );
}

export default Footer;
