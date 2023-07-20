type Ingredient = {
    id: string,
    name: string;
    group: "fruit" | "vegetable" | "protein";
    minAge: number; // months
    photo?: string
}

type List = {
    id: string,
    name: string,
}