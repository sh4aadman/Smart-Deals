import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.console";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

const auth = getAuth(app);
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const signoutUser = () => {
    setLoading(true);
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
    signoutUser,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
}

export { AuthContext, AuthProvider };
