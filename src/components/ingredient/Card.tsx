import reactLogo from "../../assets/react.svg";
import {JSX} from "react";

type CardProps = { ingredient: Ingredient }

const Card = ({ingredient}: CardProps): JSX.Element => {

    let borderColor: string;
    switch (ingredient.group) {
        case "fruit":
            borderColor = "border-yellow-500";
            break;
        case "protein":
            borderColor = "border-red-500";
            break;
        case "vegetable":
            borderColor = "border-green-500";
            break;
    }

    return (
        <>
            <div role="card"
                className={"p-3 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4 border-l-4 " + borderColor}>
                <div className="shrink-0">
                    <img className="h-12 w-12" src={reactLogo} alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black"> {ingredient.name}</div>
                    <div className="font-thin text-black"> {ingredient.group} - {ingredient.minAge} months</div>
                </div>
            </div>
        </>
    )
}

export default Card
