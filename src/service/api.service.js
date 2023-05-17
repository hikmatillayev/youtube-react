import axios from "axios";

const BASE_URI='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': '3f522d03d7msh9b68fd671b334b8p1c9ca5jsnbed14b0949c8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
    async fetching(url) {
        const response=await axios.get(`${BASE_URI}/${url}`, options)
        return response
     },
}