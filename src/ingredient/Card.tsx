import reactLogo from "../assets/react.svg";

type CardProps = { ingredient: Ingredient }

export function Card({ingredient}: CardProps) {
    const borderColor : string = ingredient.group == "vegetable" ? "border-green-500" : "border-yellow-500";

    return (
        <>
            <div
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