import axios from "axios";

const KEY = "AIzaSyCtx4bYnUC3RwgTKH-oqMgSoEgMzur6qVE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
