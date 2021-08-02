import axios from "axios";
import { useState, useEffect } from "react";

const Podcasts = () => {

  const [ podcasts, setPodcasts] = useState([])
  useEffect(() => {
    const baseURL = 'https://listen-api.listennotes.com/api/v2/best_podcasts'
    const apiKey = '0646ea62032045e0b681095308e28e1a'
    
    axios({
      url: baseURL,
      method: 'GET',
      dataResponse: 'json',
      headers: {
        "X-ListenAPI-Key": apiKey,
      },
      params: {
        top_level_only: 1
      },
    }).then( res => {
      // console.log(res.data);
      setPodcasts(res.data.podcasts)
    })
  },[])

  return (
    <section className="podcasts">
      <div className="podcastsContainer">
        <ul className="podcastsCatalogue">
          {
            podcasts.map( podcast => {
              return (
                <li className="podcastsCatalogueItem" key={podcast.id}>
                  <img src={podcast.thumbnail} alt="" />
                  <p>{podcast.title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Podcasts;