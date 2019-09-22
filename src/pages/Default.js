import React, { useEffect } from "react";

const Default = props => {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  });
  return <div>oops no such url</div>;
};

export default Default;
