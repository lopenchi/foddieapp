import './App.css'
import {getAllIngredientsName} from "./services/IngredientService.ts"
import {JSX} from "react";
import {Link, Outlet, useLoaderData} from "react-router-dom";

export async function loader(): Promise<List[]> {
    return await getAllIngredientsName();
}

const App = (): JSX.Element => {
    const ingredients = useLoaderData() as Ingredient[];

    return (
        <>
            <h1 className="text-5xl"> Foodie App </h1>

            <div className={"flex"}>
                <div id="sidebar">
                    <h1>React Router ingredients</h1>
                    <nav>
                        {ingredients.length ? (
                            <ul>
                                {ingredients.map((ingredient: Ingredient) => (
                                    <li key={ingredient.id}>
                                        <Link to={`ingredients/${ingredient.id}`}>
                                            {ingredient.name ?
                                                <>{ingredient.name}</>
                                                :
                                                <i>No Name</i>
                                            }
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                <i>No ingredients</i>
                            </p>
                        )}
                    </nav>
                </div>
                <div id="detail" className={"container flex items-center"}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default App
