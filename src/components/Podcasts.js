import axios from "axios";
import { useState, useEffect } from "react";
import AddFavorite from "./AddFavorite";

const Podcasts = (props) => {

  // const [ podcasts, setPodcasts] = useState([])
  // useEffect(() => {
  //   const baseURL = 'https://listen-api.listennotes.com/api/v2/best_podcasts'
  //   const apiKey = '0646ea62032045e0b681095308e28e1a'
    
  //   axios({
  //     url: baseURL,
  //     method: 'GET',
  //     dataResponse: 'json',
  //     headers: {
  //       "X-ListenAPI-Key": apiKey,
  //     }
  //   }).then( res => {
  //     setPodcasts(res.data.podcasts)
  //   })
  // },[])

  const podcasts = props.allPodcasts.results

  return (props.loading ?
    <section className="podcasts">
      <div className="podcastsContainer">
        <ul className="podcastsCatalogue">
          {
            podcasts.map( podcast => {
              return (
                <li className="podcastsCatalogueItem" key={podcast.id}>
                  <img src={podcast.thumbnail} alt={podcast.title} />
                  {/* <p className="podcastsCatalogueItemTitle">{podcast.title}</p> */}
                  <div className="podcastsCatalogueItemDesc">{podcast.description}</div>
                  <AddFavorite />
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
    : <p>loading...</p>
  )
}

export default Podcasts;