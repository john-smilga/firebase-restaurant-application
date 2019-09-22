import React, { useState } from "react";
const UserContext = React.createContext();
export default function UserProvider(props) {
  const user = null;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    console.log("hello");

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
