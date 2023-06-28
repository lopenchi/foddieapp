import './App.css'
import {Card} from "./ingredient/Card.tsx";

function App() {
    const ingredients: Ingredient[] = [
        {
            name: "tomatoe",
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
    ]

    return (
        <div className="grid grid-cols-4 gap-4">
            {ingredients.map((ingredient, i) => <><Card key={i} ingredient={ingredient}/><br/></>)}
        </div>
    )
}

export default App
