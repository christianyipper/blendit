function Button({ text, color, bg, border }) {
    return (
        <button className={`
            w-fit 
            py-3 px-6 
            rounded-full 
            text-nowrap 
            ${color} ${bg} ${border}
            border-2
            transition-colors duration-300
        `}>{ text }</button>
    );
}

export default Button;