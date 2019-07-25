import http from './httpServices';
import auth from './authService';

const api = 'http://localhost:5000/api/projects';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': auth.getToken()
    }
}
export const addProject = (project) => {
    return  http.post(api, project, config);
}

export const getProjects = () => {
    return http.get(api, config);
}
export const getProject = (title) => {
    return http.get(`${api}/${title}`, config);
}
export const getProjectRepo = (username) => {
    return http.get(`http://localhost:5000/api/show-repository/${username}`);
}
export const deleteProject = (id) => {
    return http.delete(`${api}/${id}`, config);
}