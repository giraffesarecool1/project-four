import headphones from '../assets/headphonesCC.jpg';
import soundwhite from '../assets/soundwhite.svg';

const Header = () => {
  return (
    <header className="header">
      
      <div className="headerContainer wrapper">

        <img src={headphones} alt="a pair of black headphones" />
      
        <div className="textInHeader">
          <h1 className="headerTitle">Podcast<img src={soundwhite} className="logoWhite" alt="Podcast Planner logo" />Planner</h1>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <p className="headerText">Search for podcasts based on your commute time.</p> <p>Listen while you walk, hike or commute to work and save them to a playlist!</p>
=======
          <p className="headerText"><p>Search for podcasts based on your travel time.</p> Listen while you walk, hike or commute to work and save them to your playlist!</p>
>>>>>>> Stashed changes
=======
          <p className="headerText"><p>Search for podcasts based on your travel time.</p> Listen while you walk, hike or commute to work and save them to your playlist!</p>
>>>>>>> Stashed changes
        </div>

      </div> 

      <a className="button" href="#getStarted">Get Started</a>
      
    </header>
  )
}

export default Header;