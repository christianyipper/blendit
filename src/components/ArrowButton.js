import Arrow from '../assets/icons/arrow.svg';

function ArrowButton({ onClick, rotation, grid }) {
    return (
        <button className={`
        bg-pink-500
        rounded-full
        p-1
        w-12 h-12 aspect-square 
        grid place-items-center
        ${rotation}
        hover:scale-90
        transition-all
        `}
        onClick={onClick}
        >
            <img src={Arrow} alt="Arrow"
                className="object-cover"
            />
        </button>
    );
}

export default ArrowButton;