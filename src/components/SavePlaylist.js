import firebase from "../firebase";
import { useState, useEffect } from "react";

const SavePlaylist = (props) => {
    // an empty state to hold the data for firebase
    const [ playlist, setPlaylist ] = useState([]);
    const [ userTitle, setUserTitle ] = useState('');

    useEffect( () => {
        setPlaylist(props.allPodcasts.results);
        console.log(props.allPodcasts.results);
        console.log(playlist);
    }, []);
    
    // 1.
    const playlistObject = {
        userTitle: userTitle,
        // array1: ['Chris', 'Nicky', 'Frank', 'Beth']
        userPlaylist: [...playlist]
    };
    
    // anytime input field changes (user types in the playlist name text field), the change will be captured and put into the playlist (*see note below in form)
    const handleChangeTitle= (e) => {
        setUserTitle(e.target.value);
        // console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(setPlaylist);
        const debRef = firebase.database().ref();    
        //2. update state with the new object:
        // setPlaylist(playlistObject);
        debRef.push(playlistObject);
        // setPlaylist([])
    }



    return(
        <div>
            <form>
                <label>Save Playlist</label>
                <input
                    type="text"
                    id="playlist"
                    onChange={handleChangeTitle}
                    // or can we eliminate the handleChange function and just put:
                    // onChange={(e) => setPlaylistName(e.target.value)}
                    // update this with the title:
                    value={userTitle}
                />
                <button onClick={handleSubmit} >Add Playlist</button>
            </form>
        </div>
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