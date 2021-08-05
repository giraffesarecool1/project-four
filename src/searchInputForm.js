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
        <section id="getStarted">
            <div className="inputForm formWrapper">
                
                <label className="formLabel">
                    How long is your journey today?
                    <input type="range" min="5" max="240" step="5" id="slider" value= {props.walkTime} onChange={props.handleChange} />
                    <p>{props.walkTime} minutes</p>
                </label>

                <button className="genresBtn" onClick={props.displayGenreSelection}>Select a Genre</button> 

                {/* Not sure if we want this button? Or if radio buttons populates podcast list? */}
                <button className="submitBtn" onClick={props.handleSubmit}>Submit</button>
                           
            </div>
        </section>    
    );
};

export default SearchInputForm;