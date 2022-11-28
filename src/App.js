
import React, {useState, useEffect} from 'react';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';

const App =()=>{
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  useEffect(()=>{
    onTermSubmit('Kannada latest Songs');
  },[]);

 const onTermSubmit =async (term) =>{
    const response =  await youtube.get('/search',{
         params: {
           q: term
         }
       });
       
       setVideos(response.data.items);
       setSelectedVideo(response.data.items[0]);
       };



 return (
  <div className="App ui container">
    <SearchBar  onFormSubmit={onTermSubmit}/>
    <div className='ui grid'>
    <div className='ui row'>
    <div className='eleven wide column'>
    <VideoDetails video={selectedVideo}/>
    </div>
    <div className='five wide column'>
    <VideoList 
    onVideoSelect={setSelectedVideo} 
    videos={videos}/>
    </div>
    </div>
    </div>
  </div>
);

};



export default App;
