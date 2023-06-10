import axios from "axios";

const BASE_URI='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
      maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '87bb8e9cc2mshabb6f128bb41696p1dba27jsnde55181f3a1b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
    async fetching(url) {
        const response=await axios.get(`${BASE_URI}/${url}`, options)
        return response
     },
}