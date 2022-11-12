import React from "react";
import "../css_files/addalbum.css";

// component for adding a new album

const AddAlbum = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value);
    e.target.name.value = "";
  };

  return (
    <div className="form-container">
      <h3>Add a new Album here</h3>
      <div className="form-data">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter Album Name"
            name="name"
          />
          <button onSubmit={handleSubmit}>ADD ALBUM</button>
        </form>
      </div>
    </div>
  );
};

export default AddAlbum;
