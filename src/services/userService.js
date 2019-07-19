import http  from './httpServices';

const api = 'http://localhost:5000/api/users';
export const registerUser = (user) => {
    return http.post(api, {
        firstName: user.firstName,
        lastName: user.lastName,
        college: user.college,
        email: user.email,
        username: user.username,
        password: user.password
        
    });
}