import React from "react";
import "../css_files/album.css";

// component for seperate albums 
// this will show details of each album fetched from api call

const Album = ({ id, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="album-card">
      <div className="outer-div">
        <div className="details-div">
          <span>{id}.</span>
          <span>{name}</span>
        </div>

        <div className="del-div">
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Album;
