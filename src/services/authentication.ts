import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,

    signInWithPopup,
    GoogleAuthProvider,
    UserCredential,

} from "firebase/auth";
import { saveUserToFirestore } from "./user_service";

export const doCreateUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
};

export const doSignInWithEmailAndPassword = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    saveUserToFirestore(result.user.uid, result.user.displayName ?? '', result.user.email ?? '', '', '');
    return result;
};

export const doSignOut = (): Promise<void> => {
    return auth.signOut();
};

export const doPasswordReset = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
};
export { saveUserToFirestore };

