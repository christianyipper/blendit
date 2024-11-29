function AboutCard({ heading, text }) {
    return (
        <div className="
        w-full p-4 rounded-2xl relative 
        text-grey-900 bg-grey-100 shadow-sm
        ">
            <h3>{ heading }</h3>
            <p>{ text }</p>
        </div>
    );
}

export default AboutCard;