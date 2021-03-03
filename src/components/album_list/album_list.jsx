import React from "react";
import Album from "../album/album";

const AlbumList = (props) => (
  <ul>
    {props.albums.map((album) => (
      <Album key={album.id.attributes["im:id"]} album={album} />
    ))}
  </ul>
);

export default AlbumList;
