import { useState, useEffect } from "react";
import AddFavorite from "./AddFavorite";

const Podcasts = (props) => {

  const podcastsArr = props.allPodcasts.results
  const [podcasts, setPodcasts] = useState(0)

  useEffect(() => {
    if (podcastsArr) {
      setPodcasts(podcastsArr)
    }
  }, [podcastsArr]);


  return (

    <section className="podcasts">
      {podcasts !== 0 && props.loading === true &&
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
                        <div className="podcastsCatalogueItemDescTruncate">{podcast.description_original.replaceAll(/(<([^>]+)>)/ig, '').replaceAll(/&nbsp;/g,''}</div>
                      </div>
                      <div className="podcastsCatalogueItemLength">Length: {Math.floor(podcast.audio_length_sec / 60)} min</div>
                    </a>

                    <AddFavorite />
                  </li>
                );
              })}
          </ul>
        </div>}
    </section>);
};

export default Podcasts;
