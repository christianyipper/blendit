function ButtonLink({ text, color, bg, border, link }) {
    return (
        <a className={`
            w-fit 
            py-3 px-6 
            rounded-full 
            text-nowrap 
            ${color} ${bg} ${border}
            border-2
            transition-colors duration-300
        `}
        href={ link }
        >{ text }</a>
    );
}

export default ButtonLink;