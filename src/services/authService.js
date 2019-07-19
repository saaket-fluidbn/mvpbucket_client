import jwtDecode from 'jwt-decode';
import http from './httpServices';
const tokenKey = 'token';
const api = 'http://localhost:5000/api/auth';
const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem(tokenKey);
        const user = jwtDecode(jwt);
        return user;
    }
    catch (ex) {
        return null;
    }
}
const getToken = () => {
    return localStorage.getItem(tokenKey);
}
const loginUser = async (user) => {

       const { data: token } = await http.post(api, user);
       localStorage.setItem(tokenKey, token);
}
const logout = () => {
    localStorage.removeItem(tokenKey);
}
export default {
    getCurrentUser,
    loginUser,
    logout,
    getToken
}