import './App.css'
import {Card} from "./ingredient/Card.tsx";

function App() {
    const ingredients: Ingredient[] = [
        {
            name: "tomato",
            group: "vegetable",
            minAge: 6
        },
        {
            name: "avocado",
            group: "vegetable",
            minAge: 6
        },
        {
            name: "banana",
            group: "fruit",
            minAge: 6
        },
        {
            name: "chicken",
            group: "protein",
            minAge: 6
        },
    ]

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
