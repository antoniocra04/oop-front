import axios from 'axios';

export const client = axios.create({
	baseURL: 'https://45.143.94.102:8001/api',
	headers: { 'Access-Control-Allow-Origin': '*' },
});
