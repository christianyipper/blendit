function Pill({ text, display }) {
    return (
        <p className={`
        ${ display }
        px-4 py-1 rounded-full 
        text-sm
        bg-grey-100 text-black`}>{ text }</p>
    );
}

export default Pill;