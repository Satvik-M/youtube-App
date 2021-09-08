import axios from "axios";

const KEY = "AIzaSyBkryQXZ5jmZdOijBAcB4acqI307Aput8w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
