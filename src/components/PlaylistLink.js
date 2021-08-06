import soundpurple from '../assets/soundpurple.png';

const PlaylistLink = (props) => {
    return(

        <div className="playlistLink">

            <img src={soundpurple} alt="purple logo" className="purpleLogo" />
            <a onClick={props.playlistDisplayControl} href="#playlists">View your playlists</a>

        </div>    
    )
}

export default PlaylistLink;