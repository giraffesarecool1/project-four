import React, { useState } from 'react';
import axios from 'axios';

function SearchInputForm(props) {
    const [formData, updateFormData] = useState('');
    const [allPhotos, setAllPhotos] = useState([]);
    const [firstSubmitTracker, setFirstSubmit] = useState(0);

    //Call my form with <SearchInputForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

    

    // Write the following functions in the parent component

    // const handleChange = (e) => {
    //     function changehandler(e) {
    //       updateFormData(e.target.value);
    //     }
    //     changehandler(e)
    //   }
    // const handleSubmit = () => {
    //     setFirstSubmit(1);
    // axios({
    //     url: baseURL,
    //     method: 'GET',
    //     dataResponse: 'json',
    //     headers: {
    //       "X-ListenAPI-Key": apiKey,
    //     },
    //     params: {
    //       top_level_only: 1
    //     },
    //   }).then((response) => {
    //         const PhotoArray = response.data.results;
    //         setAllPhotos(PhotoArray);
    //         console.log(allPhotos);
    //     })
    // }
    // 



    return (
        <div className="inputForm">
            <button onClick={props.displayGenreSelection}>Genres</button>
            <label>
            How long do you want to walk for?
            <input type="range" min="5" max="240" step="5" id="slider" onChange={props.handleChange} />
            <p>{props.walkTime}</p>
        </label>
        <button onClick={props.handleSubmit}>Submit</button>
        

        </div>
    );

};

export default SearchInputForm;