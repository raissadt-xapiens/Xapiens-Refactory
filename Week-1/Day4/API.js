const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
axios.get(url)
    .then(data => console.log(data))
    .catch(err => console.log(err))




const axios = require('axios');
const users = [];

function getUrl() {
    axios
        .get("https://jsonplaceholder.typicode.com/post/")
        .then(res => console.log(res))
        // .catch(err => console.log(err))
}

function byID() {
    axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then(res => console.log(res))
        // .catch(err => console.log(err))
}

const data = axios.all([getUrl(byID())])

users.push(data);
console.log(users);