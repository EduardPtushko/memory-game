import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export function signupUser(params: any): Promise<any> {
    return client.post('/signup', { ...params });
}

export function signinUser(params: any): Promise<any> {
    return client.post('/signin', { ...params });
}

export function createResult(params: any, token: string): Promise<any> {
    return client.post('/results', params, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export function fetchResults(token: string): Promise<any> {
    return client.get('/results', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
