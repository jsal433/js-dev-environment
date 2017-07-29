import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

export { getUsers, deleteUser };

const baseUrl = getBaseUrl();

function getUsers() {
    return get('users');
}

function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError)
}

function del(url) {
    const requset = new Request(baseUrl + url, {
        method: 'DELETE'
    });

     return fetch(requset).then(onSuccess, onError)
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
