"use strict"

const bodyTag = document.querySelector("body");


const url = `https://api.github.com/search/repositories?q=user:`;

const names = ['1620prabn', 'deepti-dk', 'yaser-aldammad']

const promises = [];

const fetchData = (name) => {
    promises.push(fetch(`${url}${name}`))
}

names.map(fetchData)
console.log(promises)


const myApi = () => {
    return Promise.all(promises)
        .then(responses => {
            const data = responses.map(response => response.json())
            console.log(responses)
            return Promise.all(data);
        });
};