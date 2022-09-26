let ul = document.createElement('ul');

let li = document.createElement('li');
let a = document.createElement('a');

a.setAttribute('href', 'https://www.google.bg/');
a.textContent = "Google";
li.appendChild(a);

for(let i = 0; i < 100; i++){
   let clone = li.cloneNode(true);

   ul.appendChild(clone);
   document.body.appendChild(ul);
}

