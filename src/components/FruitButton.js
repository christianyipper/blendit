function FruitButton({ text, color, bg, onClick, link, desc }) {
    return (
        <button className={`
            w-32 relative flex flex-col justify-center items-center
            py-3 px-3 
            rounded-lg 
            text-nowrap 
            ${color} ${bg}
            transition-colors duration-300
        `}
        onClick={onClick}
        >
            <img src={link} alt={desc}
            className="w-24 my-3"
            />
            <p className="text-center bold">{text}</p>
        </button>
    );
}

export default FruitButton;