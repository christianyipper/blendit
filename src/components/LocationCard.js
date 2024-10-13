import logo from '../assets/icons/BlendIt-Icon-Yellow.svg';

function LocationCard( {image, title, line1, line2} ) {
    
    return (
        <div
            className="
            w-fit h-fit
            flex flex-col
            rounded-2xl
            overflow-hidden
            "
        >
            <img
                className="
                w-96
                aspect-video
                "
                src={image}
            >
            </img>
            <div
                className="
                bg-white
                w-full
                p-5 rounded-2xl
                flex flex-col gap-4
                "
            >
                <img
                    className="
                    w-24
                    "
                    src={logo}
                >    
                </img>
                <hgroup>
                    <h3
                        className="
                        text-xl
                        text-pink-900
                        "
                    >
                        {title}
                    </h3>
                    <h4
                        className="
                        text-lg
                        text-yellow-900
                        "
                    >
                        Address:   
                    </h4>
                    <p>
                        {line1}
                        <br></br>
                        {line2}
                    </p>
                </hgroup>
                <button
                    className="
                    w-fit 
                    py-3 px-6 
                    rounded-full 
                    text-nowrap
                    text-yellow-900
                    border-yellow-900 border-2
                    mt-5
                    self-center
                ">
                    Order Here
                </button>
            </div>
        </div>
    )

}

export default LocationCard;