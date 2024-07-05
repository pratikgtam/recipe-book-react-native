import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveUserToFirestore = async (uid: string, displayName: string, email: string, address: string, age: string) => {
    try {
        const userRef = await setDoc(doc(db, "users", uid), {
            email,
            displayName,
            uid,
            address,
            age,
        }, { merge: true });

        return userRef;

    } catch (error) {
        console.error("Error saving user to Firestore:", error);
        throw new Error("Error saving user to Firestore.");
    }
};