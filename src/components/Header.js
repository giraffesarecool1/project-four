const Header = () => {
  return (
    <header className="header">
      
      <div className="headerContainer wrapper">

        <img src="headphonesCC.jpg" alt="a pair of black headphones" />
      
        <div className="textInHeader">
          <h1 className="headerTitle">Podcast<img src="soundwhite.svg" className="logoWhite" alt="Podcast Planner logo" />Planner</h1>
          <p className="headerText"><p>Search for podcasts based on your commute time.</p> Listen while you walk, hike or commute to work and save them to a playlist!</p>
        </div>

      </div> 

      <a className="button" href="#getStarted">Get Started</a>
      
    </header>
  )
}

export default Header;