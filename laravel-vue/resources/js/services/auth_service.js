import {http, httpFile} from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store';

export function register(user) {
    return http().post('/auth/register', user);
}

export function resetPasswordRequest(user) {
    return http().post('/auth/reset-password-request', user);
}
export function resetPassword(user) {
    return http().post('/auth/reset-password', user);
}

export function login(user) {
    //after login successfully we will save inforamtion that cames with request
    return http().post('/auth/login', user).then(response =>{
        if (response.status === 200) {
            setToken(response.data);
        }
        return response.data;//this data we will send to the first return
    });
}
function setToken(user) {
    const token = jwt.sign({user:user}, 'laravelvuespafaljflajdfzaid');
    localStorage.setItem('laravel-vue-spa-token', token);
    store.dispatch('authenticate', user.user);//authenticate is function inside actions in store and that method it will send(commit) this to authenticate inside mutation
}

export function isLoaggedIn() {
    
    const token = localStorage.getItem('laravel-vue-spa-token');
    return token != null;
}

export function logout() {
     http().get('/auth/logout');
    localStorage.removeItem('laravel-vue-spa-token');
}

export function getAccessToken() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token) {
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;//return token
}

export function getUserRole() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token) {
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.user.role;//return token
}




export function getProfile() {
    return http().get('/auth/profile');
}