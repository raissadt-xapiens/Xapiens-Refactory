const axios = require('axios');
const users = [];

function getUrl() {
    axios
        .get("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(res => console.log(res))
        // .catch(err => console.log(err))
}

function byID() {
    axios
        .get("https://jsonplaceholder.typicode.com/users?userId=1")
        .then(res => console.log(res))
        // .catch(err => console.log(err))
}

const data = axios.all([getUrl(), byID()])

users.push(data);
console.log(users);