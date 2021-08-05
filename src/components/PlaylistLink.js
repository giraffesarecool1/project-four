import soundpurple from '../assets/soundpurple.png';

const PlaylistLink = () => {
    return(

        <div className="playlistLink">

            <img src={soundpurple} alt="purple logo" className="purpleLogo" />
            <a href="#playlists">View my playlists</a>

        </div>    
    )
}

export default PlaylistLink;