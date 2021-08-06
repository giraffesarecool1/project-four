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
    const handleChangeTitle = (e) => {
        setUserTitle(e.target.value);
    }

    // when user click submit button for save playlist, the playlistObject is pushed to firebase
    const handleSubmitPlaylist = (e) => {
        e.preventDefault();
        const debRef = firebase.database().ref();    
        debRef.push(playlistObject);
    }

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
                    value={userTitle}
                />
                {userTitle !== "" && <button className="playlistBtn" onClick={handleSubmitPlaylist} >Add Playlist</button>}
            </form>
        </section>
    )
}

export default SavePlaylist;
