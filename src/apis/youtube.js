import axios from 'axios';

const KEY = 'AIzaSyBltjIO_UE37bG7f-s3TF8pUCabqupRwPQ';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       type: 'video',
       key: KEY,
   }
});