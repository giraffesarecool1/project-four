import "./styles/App.css";
import axios from "axios";
import firebase from "firebase";
import React, { useState } from "react";
import SearchInputForm from "./searchInputForm.js";
import Header from "./components/Header";
import DisplayPodcasts from "./DisplayPodcasts.js";
import Podcasts from "./components/Podcasts";
import SavePlaylist from "./components/SavePlaylist";

function App() {
  const [walkTime, updateWalkTime] = useState(1);
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [genreDisplay, setGenreDisplay] = useState(0);
  const [theGenre, setTheGenre] = useState("");
  const [genreFormSubmitted, setGenreFormSubmitted] = useState(0);

  const handleChange = (e) => {
    function changehandler(e) {
      updateWalkTime(e.target.value);
    }
    changehandler(e);
  };
  const handleSubmit = () => {
    axios({
      url: "https://listen-api.listennotes.com/api/v2/search",
      method: "GET",
      dataResponse: "json",
      headers: {
        "X-ListenAPI-Key": "0646ea62032045e0b681095308e28e1a",
      },
      params: {
        q: "finance",
        top_level_only: 1,
        type: "episode",
        len_min: walkTime - 2,
        len_max: walkTime + 2,
        genre_ids: theGenre,
      },
    }).then((response) => {
      const PodcastArray = response.data;
      setAllPodcasts(PodcastArray);
      console.log(PodcastArray);
    }).then(
      setGenreFormSubmitted(1)
    )
  };

  const handleRadios = (e) => {
    function radioHandler(e) {
      setTheGenre(e.target.value);
      setGenreDisplay(0);
    }
    radioHandler(e);
  };
  const displayGenreSelection = () => {
    setGenreDisplay(1);
  };

  return (
    <div className="App">
      <Header />
      <SearchInputForm
        walkTime={walkTime}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        displayGenreSelection={displayGenreSelection}
        setGenreFormSubmitted={setGenreFormSubmitted}
      />
      {genreDisplay == 1 && <DisplayPodcasts handleRadios={handleRadios} />}
      {genreFormSubmitted == 1 && <SavePlaylist allPodcasts={allPodcasts} />}
      <Podcasts />   
    </div>
  );
}

export default App;
