import {collection, getDocs} from "@firebase/firestore"
import {database} from "../config/firebase.ts"

const collectionRef = collection(database, "ingredients");

const getAllIngredients = (): Promise<Ingredient[]> => {
    return getDocs(collectionRef)
        .then((docData) => {
            return docData.docs
                .map((doc) => ({...doc.data() as Ingredient}));
        }).catch((err) => {
            console.log(err);
            return [];
        })
}

export {getAllIngredients}
