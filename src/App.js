import './styles/App.css';
import axios from 'axios';
import firebase from 'firebase';

import Header from "./components/Header";
import Podcasts from './components/Podcasts';

function App() {
  return (
    <div className="App">
      <Header />
      <Podcasts />
    </div>
  )
}

export default App;
