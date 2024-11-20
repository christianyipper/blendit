function FruitButton({ text, color, bg, onClick, link, desc }) {
    return (
        <div className="w-36">
            <button className={`
            w-36 h-48 relative grid grid-cols-1 place-items-center justify-evenly
            py-3 
            rounded-lg 
            text-nowrap 
            ${color} ${bg}
            transition-colors duration-300
            `}
            onClick={onClick}
            >
                <img src={link} alt={desc}
                    className="h-24 w-24 aspect-square"
                />
                <p className="text-center bold">{text}</p>
            </button>
        </div>
    );
}

export default FruitButton;