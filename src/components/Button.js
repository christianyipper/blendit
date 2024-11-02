function Button({ text, color, bg, border, onClick }) {
    return (
        <button className={`
            w-fit 
            py-3 px-6 
            rounded-full 
            text-nowrap 
            ${color} ${bg} ${border}
            border-2
            transition-colors duration-300
        `}
        onClick={onClick}
        >{ text }</button>
    );
}

export default Button;