import firebase from "firebase";
import { useState, useEffect } from "react";

const savePlaylist = () => {
    // an empty state to hold the data for firebase
    const [ playlist, setPlaylist ] = useState([]);
    
    // an array to hold user input of playlist name
    const [ playlistName, setPlaylistName ] = useState([]);


    // set up reference to firebase with useEffect:
    // I dont' know if this really should be in useEffect??
    // useEffect( () => {
    //     const dbRef = firebase.database().ref();

    // })
    
    // anytime input field changes (user types in the playlist name text field), the change will be captured and put into the playlistName (*see note below in form)
    const handleChange = (e) => {
        setPlaylistName(e.target.value)
    }

    const handleSubmit = () => {
        const debRef = firebase.database().ref();
        debRef.push(playlist);
        setPlaylist('')
    }



    return(
        <div>
            <form>
                <label>Save Playlist</label>
                <input
                    type="text"
                    id="playlist"
                    onChange={handleChange}
                    // or can we eliminate the handleChange function and just put:
                    // onChange={(e) => setPlaylistName(e.target.value)}
                    value={playlistName}
                />
                <button>Add Playlist</button>
            </form>
    
        </div>
    )

}



// PSEUDO CODE:
// Add/Save data to firebase. Build a 'save playlist' function - after a list of podcasts have been displayed, the user should be able to save the list by clicking a Save button.
    // create a form for user to submit data- form should appear after/at the time the data from the api call is displayed
    // Form needs to include an input for a playlist name & a submit button
// set up handleChange to capture user input of playlist name
// On submit/click of the Save button, push the data that was displayed by the API call into a new array
    // API call results are in useState named allPodcasts ? - make the new array a copy of the array
// Save that new array into firebase