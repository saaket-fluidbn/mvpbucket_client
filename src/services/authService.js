import jwtDecode from 'jwt-decode';
import http from './httpServices';
const tokenKey = 'token';
const api = 'http://localhost:5000/api/auth';
const apiFetch  ='http://localhost:5000/api/users';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getToken()
    }
}

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
const getFullDetails = ()=>{
    return http.get(`${apiFetch}/currentUser`, config)
}

const updateDetails = (user)=>{

 return http.put(`${apiFetch}/currentUser`, user, config);
}
function getToken() {
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
    getToken,
    getFullDetails,
    updateDetails
}