import { useEffect, useState } from "react";
import "./app.css";
import AlbumList from "./components/album_list/album_list";

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const request = {
      method: "GET",
    };

    fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
      //
      request
    )
      .then((response) => response.json())
      .then((result) => setAlbums(result.feed.entry))
      .catch((error) => console.log("에러가 났습니다."));
  }, []);

  return <AlbumList albums={albums} />;
}

export default App;
