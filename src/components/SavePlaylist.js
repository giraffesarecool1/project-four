import firebase from "../firebase";
import { useState, useEffect } from "react";

const SavePlaylist = (props) => {
    // empty states to hold the data for firebase
    const [ playlist, setPlaylist ] = useState([]);
    const [ userTitle, setUserTitle ] = useState('');

    // this is set to run/load only when allPodcasts has been populated (as per ternary operator on app.js). When run, setPlaylist will populate playlist with the resulsts from allPodcasts (the users results from the api call)
    useEffect( () => {
        setPlaylist(props.allPodcasts.results);
    }, []);

    // the new Object to be stored to firebase -> the results from user selection and the playlist title written by the user in the save playlist form
    const playlistObject = {
        userTitle: userTitle,
        userPlaylist: [...playlist]
    };
    
    // Captures any changes that occur in the text input of the save playlist form(*for dry code - see note below, in form, about moving this code below)
    const handleChangeTitle= (e) => {
        setUserTitle(e.target.value);
    }

    // when user click submit button for save playlist, the playlistObject is pushed to firebase
    const handleSubmitPlaylist = (e) => {
        e.preventDefault();
        const debRef = firebase.database().ref();    
        debRef.push(playlistObject);
    }

    // NOTE TO TEAM - I TRIED ADDING A REQUIRED ATTRIBUTE TO THE PLAYLIST NAME/TITLE, BUT IT DOESN'T SEEM TO BE WORKING HOW I EXPECT IT TO - USER CAN STILL SUBMIT THEIR PLAYLIST TO FIREBASE WITHOUT A TITLE?
    return (
        <section id="savePlaylist">
            <form className="playlistForm savePlaylistWrapper">
                <label className="formLabel">Save this playlist</label>
                <input
                    type="text"
                    id="playlist"
                    placeholder="your playlist name..."
                    required="required"
                    aria-required="true"
                    onChange={handleChangeTitle}
                    // could eliminate the handleChange function and just put:
                    // onChange={(e) => setUserTitle(e.target.value)}
                    value={userTitle}
                />
                <button className="playlistBtn" onClick={handleSubmitPlaylist} >Add Playlist</button>
            </form>
        </section>
    )

}

export default SavePlaylist;



// PSEUDO CODE:
// Add/Save data to firebase. Build a 'save playlist' function - after a list of podcasts have been displayed, the user should be able to save the list by clicking a Save button.
    // create a form for user to submit data- form should appear after/at the time the data from the api call is displayed
    // Form needs to include an input for a playlist name & a submit button
// set up handleChange to capture user input of playlist name
// On submit/click of the Save button, push the data that was displayed by the API call into a new array
    // API call results are in useState named allPodcasts ? - make the new array a copy of the array
// Save that new array into firebase

// create an object with two properties - 1. Title, 2. an array of the podcasts
    // grab the input value from the form, save it to object Title
    // grab the results array (allPodcasts), save it to the object as an array
    // update the setPlaylist State with this object
    // push the playlist to firebase