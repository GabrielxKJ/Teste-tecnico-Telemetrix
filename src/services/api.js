import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://200.169.68.106:9997/api/', // é a URL que vai se repetir em todas as
});

