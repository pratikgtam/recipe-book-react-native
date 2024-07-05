import { collectionGroup, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { Recipe } from '../models/repice_model';

export const getAllRecipes = async () => {
    try {
        const queryDocumentData = collectionGroup(getFirestore(), 'recipes');
        const snaps = await getDocs(queryDocumentData);
        const recipes: Recipe[] = snaps.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        return recipes;

    } catch (error) {
        console.error("Error fetching recipes: ", error);
        throw error;
    }
};