import axios from "axios";

const KEY = "AIzaSyCxC3EWQgbrtBoDrnfei3RLSfjGQIf-zmA";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
