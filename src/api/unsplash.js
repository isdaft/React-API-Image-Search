import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID fe356bc46b936e7508466e63ec4a2679ae5e2d364c937d3592c11701706c7cf2'
	}
});