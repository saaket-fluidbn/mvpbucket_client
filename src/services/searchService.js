import http from './httpServices';
const api = 'http://localhost:5000/api/search';

export const search = (query) => {
    return http.get(`${api}/${query}`);
}