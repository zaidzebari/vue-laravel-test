import store from '../store';
import axios from 'axios';
import * as auth from './auth_service'
// ======================================================================================
//added by me
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';//added by me

// let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     console.log('yes we have token ' + token.content);//print the token
//     axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }
// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });
// ===============================================================================================

export function http() {
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            Authorization: 'Bearer ' + auth.getAccessToken(),
            // credentials: "include",
        }
    });
}

export function httpFile() {
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + auth.getAccessToken(),
            // credentials: "include",
        }
    });
}
