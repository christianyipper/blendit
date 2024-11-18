function FruitButton({ text, color, bg, onClick, link, desc }) {
    return (
        <button className={`
            w-64 h-48 relative flex flex-col justify-evenly items-center
            py-3 
            rounded-lg 
            text-nowrap 
            ${color} ${bg}
            transition-colors duration-300
            `}
            onClick={onClick}
        >
            <img src={link} alt={desc}
            className="h-36 w-36 aspect-square"
            />
            <p className="text-center bold">{text}</p>
        </button>
    );
}

export default FruitButton;