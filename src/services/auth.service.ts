import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from '@react-native-firebase/auth';
import { collection, doc, setDoc, getFirestore } from '@react-native-firebase/firestore';
import { RegisterData, UserCredentials, User } from '../types';

const auth = getAuth();
const db = getFirestore();
export const register = async ({ username, email, password }: RegisterData): Promise<void> => {
  try {
    console.log(username, email, password );
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await userCredential.user.updateProfile({
      displayName: username,
    });
    console.log(userCredential);
    await setDoc(doc(collection(db, 'users'), userCredential.user.uid), {
      username,
      email,
      createdAt: new Date(),
    });

    const token = await userCredential.user.getIdToken();
    console.log('User registered successfully! Token:', token);
    console.log('User registered successfully!');
  } catch (error) {
    console.log(error);
    throw new Error('Registration failed');
  }
};

export const login = async ({ email, password }: UserCredentials): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user: User = {
      uid: userCredential.user.uid,
      email: userCredential.user.email ?? '',
      displayName: userCredential.user.displayName,
    };
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Login failed');
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    throw new Error('Logout failed');
  }
};
