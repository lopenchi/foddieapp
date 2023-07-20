import reactLogo from "../../assets/react.svg";
import {JSX, useEffect, useState} from "react";
import {getIngredientById} from "../../services/IngredientService.ts";
import {useParams} from "react-router-dom";

const Card = ({ingredientData}: { ingredientData?: Ingredient }): JSX.Element => {

    const [ingredient, setIngredient] = useState<Ingredient | undefined>(ingredientData);
    const {ingredientId} = useParams();

    useEffect(() => {
        if (ingredientId != null) {
            getIngredientById(ingredientId).then(ing => setIngredient(ing));
        }
    }, [ingredientId]);

    if (!ingredient) return <></>;

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

    const photo = ingredient.photo ?? reactLogo;

    return (
        <>
            <div role="card" className={"p-3 w-96 bg-white rounded-xl shadow-lg space-x-4 border-l-4 " + borderColor}>
                <div className="flex flex-row items-center p-4 pb-0">
                    <img src={photo} alt="" className="h-20 w-20 flex-none rounded-full"/>
                    <div className="ml-4 flex-auto basis-1/2">
                        <div className="font-medium text-xl text-black">{ingredient.name}</div>
                        <div className="mt-1 text-slate-500">{ingredient.group} </div>
                        <div className="mt-1 text-slate-500">{ingredient.minAge} months</div>
                    </div>
                </div>
                <div className="flex justify-end gap-4 p-4">
                    <div
                        className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 font-semibold leading-5 text-white hover:bg-indigo-500">Edit
                    </div>
                    <div
                        className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium bg-red-500 text-white hover:bg-red-400">Delete
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
