import Button from "./Button";
import Pill from "./Pill";

function MenuCard({ 
    heading, text, cardColor, headingColor,
    image, imageAlt, 
    buttonColor, buttonBg, buttonBorder,
    outlineColor, outlineBorder,
    pillText1, pillText2, pillText3,
    pillDisplay1, pillDisplay2, pillDisplay3
}) {
    return (
        <div className={`${cardColor} p-4 rounded-2xl w-full desktop:w-[340px] desktop:max-w-sm`}>
            <h3 className={headingColor}>{heading}</h3>
            <div className="flex flex-row gap-2">
                <Pill
                    text={pillText1}
                    display={pillDisplay1}
                />
                <Pill
                    text={pillText2}
                    display={pillDisplay2}
                />
                <Pill
                    text={pillText3}
                    display={pillDisplay3}
                />
            </div>
            <div className="flex flex-col items-center my-8">
                <img className="w-9/12" src={image} alt={imageAlt} />
            </div>
            <article className="flex flex-col items-center gap-4">
                <p className="text-center">{text}</p>
                <div className="flex flex-row justify-center gap-4">
                    <Button
                        text="Preorder"
                        color={buttonColor}
                        bg={buttonBg}
                        border={buttonBorder}
                    />
                    <Button
                        text="Customize"
                        color={outlineColor}
                        border={outlineBorder}
                    />
                </div>
                <a className={`${outlineColor} underline`} href="">Read more</a>
            </article>
        </div>
    );
}

export default MenuCard;