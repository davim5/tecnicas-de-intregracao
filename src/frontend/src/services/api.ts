import axios from 'axios';

const API = axios.create({
baseURL: 'http://localhost:3001',
});

export const registerUser = (data: { name: string; email: string; role: string }) => API.post('/users/register', data);
export const loginUser = (data: { email: string }) => API.post('/users/login', data);
export const getWalkers = () => API.get('/walkers');
export const scheduleWalk = (data: { userId: number; walkerId: number; value: number }) => API.post('/walks/schedule', data);

export default API;