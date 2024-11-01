function ButtonOutline({ text, color, border }) {
    return (
        <button className={`
            w-fit 
            py-3 px-6 
            rounded-full 
            text-nowrap 
            ${color}
            ${border} 
            transition-colors duration-300 border-2 
        `}>{ text }</button>
    );
}

export default ButtonOutline;