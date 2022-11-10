
import React from 'react';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

class App extends React.Component {
  render() {
  return (
    <div className="App ui container">
      <SearchBar  f/>
      <VideoDetails/>
      <VideoList />
    </div>
  );
}
}

export default App;
