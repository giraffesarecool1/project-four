// PSEUDO CODE:
// playlists have been saved to firebase
// want to press a button that will display the playlist(s)
// user must choose a playlist
// will need some sort of menu that displays the users playlists
// Discuss with group - a menu that slides out / a dropdown / ?
// once clicked, the playlist (podcasts) displays on screen
// ensure that if any search results are currently being displayed, they are "replaced" by the users chosen playlist

import firebase from "../firebase";
import { useState, useEffect } from 'react';

const DisplayPlaylist = (props) => {

    // 1. state that will hold all the data we 'grab' from firebase, aka all the playlists
    const [allSavedPlaylists, setAllSavedPlaylists] = useState([])

    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (snapshot) => {
            const data = snapshot.val()
            const newArray = [];

            for (let key in data) {
                newArray.push(data[key]);
            }
            setAllSavedPlaylists(newArray);
        })
    }, []);
    //  console.log(allSavedPlaylists);

    return (
        //2. set up where the grabbed data will be displayed:
        // this will be a menu containing a list of the playlists 
        // - the title from our playlistObject (SavePlaylist component). When clicked/chosen, the userPlaylist(array of podcasts) from the playlistObject will be displayed 
        <div>
            <ul className="playlistTitleContainer">
                {allSavedPlaylists.map((aSavedPlaylist) => {
                    return (
                        <li>
                            <button className="playlistTitleBtn" onClick={() => props.fetchUserSavedPlaylist(aSavedPlaylist.userPlaylist)} >{aSavedPlaylist.userTitle}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayPlaylist;