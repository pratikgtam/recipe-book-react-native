import {auth} from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth';
import {getUserFromFirestore, saveUserToFirestore} from './user_service';
import {DocumentData} from 'firebase/firestore';

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  console.log(result);
  return result;
};

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<DocumentData | null> => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  console.log(result);
  const uid = result.user.uid;
  console.log(uid);
  const response = await getUserFromFirestore(uid);
  console.log(response);
  return response;
};

export const doSignInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  saveUserToFirestore(
    result.user.uid,
    result.user.displayName ?? '',
    result.user.email ?? '',
    '',
    '',
  );
  return result;
};

export const doSignOut = (): Promise<void> => {
  return auth.signOut();
};

export const doPasswordReset = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};
export {saveUserToFirestore};
