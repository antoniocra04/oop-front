import axios from 'axios';

export const client = axios.create({
	baseURL: 'https://92.63.178.148:8001/api',
	headers: { 'Access-Control-Allow-Origin': '*' },
});
