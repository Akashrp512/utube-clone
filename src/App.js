
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <VideoDetails/>
      <VideoList />
    </div>
  );
}

export default App;
