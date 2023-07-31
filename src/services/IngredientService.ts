import {collection, doc, getDocs, getDoc} from "@firebase/firestore"
import {database} from "../config/firebase.ts"
import {Ingredient, List} from "../types.ts";

const collectionRef = collection(database, "ingredients");

const getAllIngredients = (): Promise<Ingredient[]> => {
    return getDocs(collectionRef)
        .then((docData) => {
            return docData.docs
                .map((doc) => ({...doc.data(), id: doc.id} as Ingredient));
        }).catch((err) => {
            console.log(err);
            return [];
        })
}

const getAllIngredientsName = (): Promise<List[]> => {
    return getDocs(collectionRef)
        .then((docData) => {
            return docData.docs
                .map((doc) => ({id: doc.id, name: doc.data().name} as List));
        }).catch((err) => {
            console.log(err);
            return [];
        })
}

const getIngredientById = async (id: string): Promise<Ingredient> => {
    const docRef = doc(database, "ingredients", id);

    const docSnap = await getDoc(docRef);
    return {...docSnap.data(), id: docSnap.id} as Ingredient;
}

export {getAllIngredients, getAllIngredientsName, getIngredientById}
