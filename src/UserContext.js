import React, { useState, useEffect, useRef } from "react";
import { auth, firestore } from "./firebase";
const UserContext = React.createContext();
export default function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const unsubscribe = useRef(null);
  useEffect(() => {
    unsubscribe.current = auth.onAuthStateChanged(async user => {
      if (user) {
        const { uid, displayName, email } = user;
        const currentUser = await SetupAndGetUser({
          uid,
          displayName,
          email
        }).catch(e => console.log(e));
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe.current();
  }, []);
  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };
  const SetupAndGetUser = async user => {
    let userRef = firestore.doc(`users/${user.uid}`);
    let currentUser = await userRef.get();
    if (!currentUser.exists) {
      await userRef.set(user).catch(e => console.log(e));
      currentUser = await userRef.get();
    }
    return { id: currentUser.id, ...currentUser.data() };
  };

  return (
    <UserContext.Provider
      value={{ user, sidebarOpen, handleOpenSidebar, handleCloseSidebar }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
