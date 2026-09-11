import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.console";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

const auth = getAuth(app);
const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const signinGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    loading,
    setUser,
    createUser,
    signinUser,
    updateUser,
    signinGoogle,
    signoutUser,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
}

export { AuthContext, AuthProvider };
