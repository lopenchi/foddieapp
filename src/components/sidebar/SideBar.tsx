import {Ingredient} from "../../types.ts";
import {NavLink} from "react-router-dom";

type SideBarProps = {
    ingredients: Ingredient[];
}

export function SideBar({ingredients}: SideBarProps) {
    return (
        <>
            <div id="sidebar">
                <h1>React Router ingredients</h1>
                <nav>
                    {ingredients.length ? (
                        <ul>
                            {ingredients.map((ingredient: Ingredient) => (
                                <li key={ingredient.id}>
                                    <NavLink to={`ingredients/${ingredient.id}`}
                                             className={({isActive, isPending}) =>
                                                 isActive ? "active" : isPending ? "pending" : ""}>
                                        {ingredient.name ? <>{ingredient.name}</> : <i>No Name</i>}
                                    </NavLink>
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
        </>
    )
}