window.addEventListener("load", solve);

function solve() {
   const firstName = document.getElementById('first-name');
   const lastName = document.getElementById('last-name');
   const age = document.getElementById('age');
   const storyTitle = document.getElementById('story-title');
   const genre = document.getElementById('genre');
   const story = document.getElementById('story');
   const body = document.getElementsByClassName('body')[0];
   const firstH1 = document.getElementsByTagName('h1')[0];
   const firstForm = document.getElementsByTagName('form')[0];
   const formWrapper = document.getElementsByClassName('form-wrapper')[0];
   

   const previewList = document.getElementById('preview-list');

   const div = document.getElementById('main');
   const button = document.getElementById('form-btn')
   .addEventListener("click", form);
   

   function form(ev){
      let firstNameV = firstName.value;
      let lastNameV = lastName.value;
      let ageV = age.value;
      let storyTitleV = storyTitle.value;
      let genreV = genre.value;
      let storyV = story.value;

      if(!firstNameV || !lastNameV || !ageV || !storyTitleV || !genreV || !storyV){
          return;
      } else {
        let li = document.createElement('li');
        li.classList.add('story-info');
        
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.innerText = `Name: ${firstNameV} ${lastNameV}`;

        let pAge = document.createElement('p');
        pAge.innerText = `Age: ${ageV}`

        let pTitle = document.createElement('p');
        pTitle.innerText = `Title: ${storyTitleV}`;

        let pGenre = document.createElement('p');
        pGenre.innerText = `Genre: ${genreV}`;

        let pStory = document.createElement('p');
        pStory.innerText = `${storyV}`

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.innerText = `Save Story`;
        saveBtn.addEventListener("click", (ev) => {
            save(
              ev,
            )

          }
        );

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerText = `Edit Story`;
        editBtn.addEventListener("click", (ev) => {
            edit(
              ev,
              firstNameV,
              lastNameV,
              ageV,
              storyTitleV,
              genreV,
              storyV
            )

          }
        );

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = `Delete Story`;
        deleteBtn.addEventListener("click", (ev) => {
            deleteArticle(
              ev,
              firstNameV,
              lastNameV,
              ageV,
              storyTitleV,
              genreV,
              storyV
            )

          }
        );

        article.appendChild(h4)
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pStory);
        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        previewList.appendChild(li);
        
      }
      
      document.querySelector('#form-btn').disabled = true;
      
      clearInput();
   }

   function clearInput(){
      firstName.value = "";
      lastName.value = "";
      age.value = "";
      storyTitle.value  = "";
      genre.value = "Disturbing";
      story.value = "";
   }

   function edit(ev,
    firstNameV,
    lastNameV,
    ageV,
    storyTitleV,
    genreV,
    storyV){
      ev.target.parentNode.remove()
      firstName.value = firstNameV;
      lastName.value = lastNameV;
      age.value = ageV;
      storyTitle.value  = storyTitleV;
      genre.value = genreV;
      story.value = storyV;

   }

   function save(ev){
      ev.target.parentNode.parentNode.parentNode.remove();
      let h1 = document.createElement('h1');
      h1.innerText = "Your scary story is saved!";
      firstH1.remove();
      firstForm.remove();
      formWrapper.remove();

      div.appendChild(h1);
           div.remove();
           body.appendChild(div);
   }

   function deleteArticle(ev){
      ev.target.parentNode.remove();
      document.querySelector('#form-btn').disabled = false;
   }
  
}
