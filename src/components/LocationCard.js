import logo from '../assets/icons/BlendIt-Icon-Yellow.svg';

function LocationCard( {image, title, line1, line2} ) {
    
    return (
        <div
            className="
            min-w-min
            flex flex-col
            rounded-2xl
            overflow-hidden
            first:ml-5
            last:mr-5
            "
        >
            <img
                className="
                    h-full
                object-cover object-center
                "
                src={image}
            />
            <div
                className="
                bg-white
                w-full
                p-5 rounded-b-2xl
                flex flex-col gap-4
                "
            >
                <img
                    className="
                    w-24
                    "
                    src={logo}
                />    
                <hgroup
                        className="w-fit"
                >
                    <h3
                        className="
                        text-xl text-nowrap
                        text-pink-900
                        "
                    >
                        {title}
                    </h3>
                    <p
                        className="
                        text-grey-500
                        "
                    >
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
                    text-pink-500
                    border-pink-500 border-2
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