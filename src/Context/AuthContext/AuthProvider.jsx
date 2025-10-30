import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  reload,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import toast from "react-hot-toast";

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUEP = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUEP = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUG = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const updateUser = async (updatedObj) => {
    setUserLoading(true);

    return updateProfile(auth.currentUser, updatedObj)
      .then(() => {
        return reload(auth.currentUser);
      })
      .then(() => {
        setUser(auth.currentUser);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const reloadUser = async () => {
    setUserLoading(true);
    await reload(auth.currentUser);
    setUser(auth.currentUser);
  };

  const signout = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  const passwordReset = async (email, actionCodeSettings) => {
    return sendPasswordResetEmail(auth, email, actionCodeSettings)
    .then(() => {
      toast.warning("Password reset email will be send. Please check your gmail inbox or spam tab.")
      window.location.href = "https://mail.google.com/";
    });
  };

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => {
      userState();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    userLoading,
    setUserLoading,
    createUEP,
    signInUEP,
    passwordReset,
    createUG,
    updateUser,
    reloadUser,
    signout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
