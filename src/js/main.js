"use strict";
console.log(`Hello! Give me a chance, let's have a talk:)`);

document.querySelector('#myForm').addEventListener('submit', (e) => fetchFunction(e))

const fetchFunction = async (e) => {
  e.preventDefault()

  const list = document.querySelector('.repo-list--js');
  const user = document.querySelector('#username').value;

  fetch(`https://api.github.com/users/${user}/repos`)

    .then(resp => resp.json())
    .then(resp => {
      const repos = resp.sort((a, b) => b.stargazers_count - a.stargazers_count);
      console.log(repos);
      list.innerHTML = "";
      for (const repo of repos) {
        const {
          name
        } = repo;
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
      list.innerHTML = "There is no user with this username";
    })
}