import './App.css';
import Playlist from './playlist/playlist';
import SearchBar from './search/searchbar';
import SearchResults from './search/searchresults';

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
