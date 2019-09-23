import React, { useState } from "react";
import { firestore } from "../firebase";
const initialState = {
  title: "",
  content: "",
  image:
    "https://images.pexels.com/photos/2276797/pexels-photo-2276797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
};
const Share = props => {
  const [values, setValues] = useState(initialState);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const restaurant = { ...values, stars: 0, comments: [] };
    await firestore
      .collection("restaurants")
      .add(restaurant)
      .catch(error => console.log(error));
    props.history.push("/");
  };
  return (
    <section className="share-container">
      <form className="share-form">
        {/* form group */}
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            className="form-control"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        {/* end of form group */}
        {/* form group */}
        <div className="form-group">
          <label htmlFor="content">content</label>
          <textarea
            name="content"
            id="content"
            autoComplete="off"
            className="form-control"
            value={values.content}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* end of form group */}
        {/* form group */}
        <div className="form-group">
          <label htmlFor="file">file</label>
          <input
            type="file"
            name="file"
            id="file"
            autoComplete="off"
            className="form-control"
          ></input>
        </div>
        {/* end of form group */}
        <button type="submit" onClick={handleSubmit} className="form-control">
          submit
        </button>
      </form>
    </section>
  );
};

export default Share;
