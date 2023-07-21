import {Link, Outlet, useLoaderData} from "react-router-dom";
import {getAllIngredients} from "../services/IngredientService.ts";

export async function loader(): Promise<Ingredient[]> {
    return await getAllIngredients();
}
export default function Root() {
    const ingredients = useLoaderData() as Ingredient[];

    return (
        <>
            <div id="sidebar">
                <h1>React Router ingredients</h1>
                <nav>
                    {ingredients.length ? (
                        <ul>
                            {ingredients.map((ingredient: Ingredient) => (
                                <li key={ingredient.id}>
                                    <Link to={`ingredients/${ingredient.name}`}>
                                        {ingredient.name ? (
                                            <>
                                                {ingredient.name}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}
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
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
