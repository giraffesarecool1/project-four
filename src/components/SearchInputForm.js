import React, { useState } from 'react';

function SearchInputForm(props) {
    const [formData, updateFormData] = useState('');
    const [allPhotos, setAllPhotos] = useState([]);
    const [firstSubmitTracker, setFirstSubmit] = useState(0);

    return (
        <section id="getStarted">
            <form className="inputForm formWrapper">
                
                <label className="formLabel">
                    How long is your journey today?
                    <input type="range" min="5" max="240" step="5" id="slider" value= {props.walkTime} onChange={props.handleChange} />
                    <p>{props.walkTime} minutes</p>
                </label>

                <div className="topicLabel">
                    <label>
                        What topic would you like to listen to?
                        <input type="text" onChange={props.handleChangeKeyword}></input>
                    </label>
                </div>

                <button className="genresBtn" onClick={props.displayGenreSelection}>Select a Genre</button> 
            </form>
        </section>    
    );
};

export default SearchInputForm;