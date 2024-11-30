function FruitButton({ text, color, selected, onClick, link, desc }) {
    return (
        <button className={`
        w-36 h-48 px-3 py-3 aspect-[91/116]
        relative grid grid-cols-1 place-items-center justify-evenly 
        rounded-lg 
        text-nowrap rotate-
        ${color} bg-yellow-100
        transition-all duration-300
        ${selected}
        desktop:w-[calc(33%-0.75rem)] desktop:h-auto
        `}
        onClick={onClick}
        >
            <img src={link} alt={desc}
                className="
                aspect-square
                w-24
                desktop:w-1/2"
            />
            <p className="text-center text-wrap font-bold">{text}</p>
        </button>
    );
}

export default FruitButton;