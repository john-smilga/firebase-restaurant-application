import React, { useContext } from "react";
import { UserContext } from "../UserContext";
const Log = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <span className="user">hello {user}</span>
          <button className="btn-log">logout</button>
        </div>
      ) : (
        <button className="btn-log">login</button>
      )}
    </div>
  );
};

export default Log;
