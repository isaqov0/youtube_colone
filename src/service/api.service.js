import axios from 'axios'
const BASE_URI = 'https://youtube-v31.p.rapidapi.com'


const options = {
	params: {
		type: 'video',
		maxResults: '50'
	},
	headers: {
		// 'x-rapidapi-key': '5367e3e77dmsh4ce6ce0ade2b9b7p147524jsn760cfcb99b66', // isaqov1700
		'x-rapidapi-key': '44681cb10dmshf30335f945147d8p10eadajsnbded5759b000', // isakov0017
		// 'x-rapidapi-key': '3901c8804fmsh26a89eeefa1f3b2p12d750jsnc9f0b0d87d31', // reactReact0017
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


export const ApiService = {
	async fetching(uri) {
		const response = await axios.get(`${BASE_URI}/${uri}`, options)
		return response.data
	}
}