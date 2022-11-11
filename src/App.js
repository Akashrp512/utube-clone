
import React from 'react';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';


class App extends React.Component {
      
  state ={videos: [], selectedVideo: null };
    onTermSubmit =async (term) =>{
     const response =  await youtube.get('/search',{
          params: {
            q: term
          }
        });

        
        this.setState({videos : response.data.items })
    };
     
    onVideoSelect =(video) => {
       this.setState({selectedVideo: video});
    };
    
  render() {
  return (
    <div className="App ui container">
      <SearchBar  onFormSubmit={this.onTermSubmit}/>
      <VideoDetails video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
    </div>
  );
}
}

export default App;
