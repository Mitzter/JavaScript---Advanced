import {html, render} from './node_modules/lit-html/lit-html.js'
import {towns} from './towns.js'

const townsRoot = document.getElementById("towns");
const resultRoot = document.getElementById("result");
document.querySelector("button").addEventListener("click", search)

function searchTemplate(townsName, match) {
   const ul = html`
      <ul>
         ${townsName.map(townsName => createLiTemplate(townsName, match))}
      </ul>
   `

   return ul
}

function createLiTemplate(town, match){
   return html`
      <li class="${(match && town.toLowerCase().includes(match)) ? "active" : ""}">${town}</li>
   `
}

function update(){
   const ul = searchTemplate(towns);
   render(ul, townsName)
}

function search(){
   const textNode = document.getElementById('searchText');
   const text = textNode.value.toLowerCase();
   update(text);
   updateCount();
   textNode.value = "";
}

function updateCount(){
   const count = document.querySelectorAll(".active").length;
   const countElement = count > html`<p>${count} matches found</p> : ""`;

   render(countElement, resultRoot)
}
