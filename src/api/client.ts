import axios from 'axios';

export const client = axios.create({
	baseURL: 'http://45.143.94.102:5000/api',
	headers: { 'Access-Control-Allow-Origin': '*' },
});
