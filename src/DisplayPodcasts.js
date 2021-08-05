import React, { useState, useEffect } from 'react';

import axios from 'axios';

const DisplayPodcasts = (props) => {

    const [theGenreList, setTheGenreList] = useState([])
    useEffect( () => {axios({
        url: "https://listen-api.listennotes.com/api/v2/genres",
        method: 'GET',
        dataResponse: 'json',
        headers: {
            "X-ListenAPI-Key": '0646ea62032045e0b681095308e28e1a'
          },
        params: {
          top_level_only: 1
        },
      }).then((response) => {
            const GenreArray = response.data.genres;
            setTheGenreList(GenreArray);
            console.log(theGenreList);
        })}, [])
    return (
        <section>
            
            <form className="genreDiv">

                {
                     theGenreList.map((genreObj) => {
                        return (
                            <div className="radioBtns" key={genreObj.id}>
                                <input type="radio" value={genreObj.name} onChange={props.handleRadios}></input>
                                <label>{genreObj.name}</label>
                            </div>                            
                        )
                    })}
            </form>

                
        </section>
    )
                }
export default DisplayPodcasts;