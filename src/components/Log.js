import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { googleSignIn, singOut } from "../firebase";
const Log = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <span className="user">hello {user.displayName}</span>
          <button className="btn-log" onClick={singOut}>
            logout
          </button>
        </div>
      ) : (
        <button className="btn-log" onClick={googleSignIn}>
          login
        </button>
      )}
    </div>
  );
};

export default Log;
