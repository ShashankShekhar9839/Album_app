import React, { useEffect, useState } from "react";
import AddAlbum from "./AddAlbum";
import Album from "./Album";

import "../css_files/albumcontainer.css";

// this contains all the mwthods and api call

const AlbumContainer = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums();
  }, []);

  // fetching data using api

  const getAlbums = async () => {
    await fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => {
        console.log(err);
      });
  };

  //  function for adding a new album

  const onAdd = async (name) => {
    console.log(name);
    await fetch(`https://jsonplaceholder.typicode.com/albums`, {
      method: "POST",
      body: JSON.stringify({
        title: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setAlbums((albums) => [...albums, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function for deleting album

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setAlbums(
            albums.filter((item) => {
              return item.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="album-container">
      <div>
        <AddAlbum onAdd={onAdd} />
      </div>
      <br></br>
      <h3>Collection of all your albums</h3>
      <br></br>
      <div>
        {albums.map((item) => {
          return <Album id={item.id} name={item.title} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default AlbumContainer;
