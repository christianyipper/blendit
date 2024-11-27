import logo from '../assets/icons/BlendIt-Icon-Yellow.svg';
import ButtonLink from './ButtonLink';

function LocationCard( {image, title, line1, line2} ) {
    
    return (
        <div
            className="
            min-w-[45%]
            flex flex-col
            rounded-2xl
            overflow-hidden
            first:ml-5
            last:mr-5
            "
        >
            <img
                className="
                h-fit
                object-cover object-center
                "
                src={image}
            />
            <div
                className="
                bg-white
                w-full h-full
                p-5 rounded-b-2xl
                flex flex-col gap-4 justify-between
                "
            >
                <div
                    className="
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
                            text-xl
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
                </div>
                <ButtonLink
                    className="
                    w-fit 
                    py-3 px-6 
                    rounded-full 
                    text-nowrap
                    mt-5
                    self-center
                    hover:scale-95
                    transition-all
                "
                    text="Order Ahead"
                    color="text-pink-500"
                    bg="bg-white"
                    border="border-pink-500"
                    link="/builder"
                />
            </div>
        </div>
    )

}

export default LocationCard;