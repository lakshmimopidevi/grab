import axios from 'axios';

const http = axios.create({
	baseURL: process.env.REACT_APP_SERVER_DOMAIN || 'https://grab-bits-website.vercel.app/',
});

export default http;
