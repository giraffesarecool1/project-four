import "./styles/App.css";
import axios from "axios";
import React, { useState } from "react";
import SearchInputForm from "./components/SearchInputForm.js";
import Header from "./components/Header";
import DisplayPodcasts from "./components/DisplayPodcasts.js";
import Podcasts from "./components/Podcasts";
import SavePlaylist from "./components/SavePlaylist";
import Footer from "./components/Footer.js";
import PlaylistLink from "./components/PlaylistLink.js";
import DisplayPlaylist from "./components/DisplayPlaylist";

function App() {
  const [walkTime, updateWalkTime] = useState(5);
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [genreDisplay, setGenreDisplay] = useState(0);
  const [theGenre, setTheGenre] = useState("");
  const [genreFormSubmitted, setGenreFormSubmitted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [apiKeyWord, setKeyWord] = useState("");
  const [toggle, setToggle] = useState(0);
  const [renderFromSavedOrNot, setRenderFromSavedOrNot] = useState(0);

  const fetchUserSavedPlaylist = (userPlayListThatIsBeingFetched) => {
    setAllPodcasts({ results: userPlayListThatIsBeingFetched });
    console.log(userPlayListThatIsBeingFetched);
    setRenderFromSavedOrNot(1);
    setLoading(true);
  }

  const handleChangeKeyword = (e) => {
    function wordChanger(e) {
      setKeyWord(e.target.value);
    }
    wordChanger(e)
  }
  const handleChange = (e) => {
    function changehandler(e) {
      updateWalkTime(e.target.value);
    }
    changehandler(e);
  };
  const handleSubmit = (e) => {
    setRenderFromSavedOrNot(0);
    e.preventDefault();
    axios({
      url: "https://listen-api.listennotes.com/api/v2/search",
      method: "GET",
      dataResponse: "json",
      headers: {
        "X-ListenAPI-Key": "0646ea62032045e0b681095308e28e1a",
      },
      params: {
        q: apiKeyWord,
        type: "episode",
        len_min: +walkTime - 2,
        len_max: +walkTime + 2,
        genre_ids: theGenre,
      },
    }).then((response) => {
      const PodcastArray = response.data;
      setAllPodcasts(PodcastArray);
      setLoading(true);
      console.log(PodcastArray);
    });
  };

  const handleRadios = (e) => {
    function radioHandler(e) {
      setTheGenre(e.target.id);
      setGenreDisplay(0);
    }
    radioHandler(e);
  };
  const displayGenreSelection = (e) => {
    e.preventDefault();
    setGenreDisplay(1);
  };

  const playlistDisplayControl = (e) => {
    e.preventDefault();
    toggle === 1 ? setToggle(0) : setToggle(1);
  }
  return (
    <div className="App">
      <Header />
      <SearchInputForm
        walkTime={walkTime}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        displayGenreSelection={displayGenreSelection}
        setGenreFormSubmitted={setGenreFormSubmitted}
        theGenre={theGenre}
        handleChangeKeyword={handleChangeKeyword}
        apiKeyWord={apiKeyWord}
      />
      {genreDisplay === 1 && <DisplayPodcasts handleRadios={handleRadios} />}

      <div className="submitContainer">
        {theGenre !== "" && apiKeyWord !== "" && <button className="submitBtn" onClick={handleSubmit}>Submit</button>}
      </div>

      <PlaylistLink playlistDisplayControl={playlistDisplayControl} />

      {genreFormSubmitted === 1 && <SavePlaylist allPodcasts={allPodcasts} loading={loading} />}

      {loading ? <SavePlaylist allPodcasts={allPodcasts} /> : null}

      {toggle === 1 && <DisplayPlaylist fetchUserSavedPlaylist={fetchUserSavedPlaylist} />}

      <Podcasts
        allPodcasts={allPodcasts}
        loading={loading}
      />

      <Footer />
    </div>
  );
}

export default App;
