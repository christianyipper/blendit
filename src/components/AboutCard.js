function AboutCard({ heading, text }) {
    return (
        <div className="
        w-full p-4 rounded-2xl relative bg-grey-100
        ">
            <h3>{ heading }</h3>
            <p>{ text }</p>
        </div>
    );
}

export default AboutCard;