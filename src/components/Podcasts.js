import { useState, useEffect } from "react";
import AddFavorite from "./AddFavorite";

const Podcasts = (props) => {

  const podcastsArr = props.allPodcasts.results
  const [ podcasts, setPodcasts ] = useState([])
  
  useEffect(() => {
    setPodcasts(podcastsArr)
  },[podcastsArr])

  return (props.loading ?
    <section className="podcasts">
      <div className="podcastsContainer">
        <h2 className="podcastsTitle">Your Podcasts</h2>
        <ul className="podcastsCatalogue">
          {
          podcasts.map((podcast) => {
            return (
              <li className="podcastsCatalogueItem" key={podcast.id}>
                <a href={podcast.listennotes_url} target="_blank" rel="noopener noreferrer">
                  <img src={podcast.thumbnail} alt={podcast.title} />
                  <p className="podcastsCatalogueItemTitle">{podcast.title_original}</p>
                  <div className="podcastsCatalogueItemDesc">
                    <div className="podcastsCatalogueItemDescTruncate">{podcast.description_original}</div>
                  </div>
                  <div className="podcastsCatalogueItemLength">Length: {Math.floor(podcast.audio_length_sec / 60)} min</div>
                </a>
                
                <AddFavorite />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
    : <div></div>
  );
};

export default Podcasts;
