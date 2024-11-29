function ButtonLink({ text, color, bg, border, link }) {
    return (
        <a className={`
            w-fit 
            py-3 px-6 
            rounded-full 
            text-nowrap 
            ${color} ${bg} ${border}
            hover:scale-95
            border-2
            transition-all
        `}
        href={ link }
        >{ text }</a>
    );
}

export default ButtonLink;