
"use strict";
console.log(`Hello! Give me a chance, let's have a talk:)`);

document.querySelector('#myForm').addEventListener('submit', (e)=>fetchFunction(e))

const fetchFunction = async (e) => {
  e.preventDefault()

const list = document.querySelector('.repo-list--js');
const user = document.querySelector('#username').value;

fetch(`https://api.github.com/users/${user}/repos?sort=stars`)
//https://api.github.com/search/repositories?q=user:github+sort:stars`)

.then(resp => resp.json())
.then(resp => {
 const repos = resp; 
 for (const repo of repos) {
   const {name} = repo;
   console.log(repo);
   list.innerHTML += `
             <li class="project">
            <div class="project__container">
              <h3 class="project__tittle">${name}</h3>
           </div>
        </li>
   `;
 }
})
.catch(err => {
  console.log(err);
})
}

//const { Octokit } = require("@octokit/core");
//await octokit.request('GET /users/{username}/repos', {
 //   username: 'username'
 // })