function Button({ text, color, bg, border, onClick }) {
    return (
        <button className={`
            w-fit 
            py-3 px-6 
            rounded-full 
            text-nowrap 
            ${color} ${bg} ${border}
            hover:scale-95
            border-2
            transition-all
        `}
        onClick={onClick}
        >{ text }</button>
    );
}

export default Button;