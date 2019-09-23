import React, { useState, useEffect, useRef } from "react";
import { auth } from "./firebase";

const UserContext = React.createContext();
export default function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const unsubscribe = useRef(null);
  useEffect(() => {
    unsubscribe.current = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, email } = user;
        setUser({ uid, displayName, email });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe.current();
    };
  });
  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
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
