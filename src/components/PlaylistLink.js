import soundpurple from '../assets/soundpurple.png';

const PlaylistLink = () => {
    return(

        <div className="playlistLink savePlaylistWrapper">

            <img src={soundpurple} alt="purple logo" className="purpleLogo" />
            <a href="#playlists">View your playlists</a>

        </div>    
    )
}

export default PlaylistLink;