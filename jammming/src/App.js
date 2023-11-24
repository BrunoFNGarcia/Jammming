import './App.css';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className='boxes'>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
