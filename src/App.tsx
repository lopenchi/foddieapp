import './App.css'
import Card from "./components/ingredient/Card.tsx"
import {getAllIngredients} from "./services/IngredientService.ts"
import {JSX, useEffect, useState} from "react";

const App = (): JSX.Element => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        getAllIngredients().then(ingredients => setIngredients(ingredients));
    }, []);

    return (
        <>
            <h1 className="text-5xl"> Foodie App </h1>
            <div className="container mx-auto py-10 grid grid-cols-4 gap-4">
                {ingredients.map((ingredient, i) => <Card key={i} ingredient={ingredient}/>)}
            </div>
        </>
    )
}

export default App
