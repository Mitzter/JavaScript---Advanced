/* window.addEventListener("load", solve);

function solve() {
  function solve() {
    const titleInputEl = document.getElementById("post-title");
    const categoryInputEl = document.getElementById("post-category");
    const contentInputEl = document.getElementById("post-content");
    const reviewUlEl = document.getElementById("review-list");
    const publishedUlEl = document.getElementById("published-list");
    const reviewMessage = document.getElementById("reviewed-msg");
    const uploadedMessage = document.getElementById("approved-msg");
    document.getElementById("clear-btn").addEventListener("click", clearPosts);
    const submitButtonEl = document
      .getElementById("publish-btn")
      .addEventListener("click", (ev) => {
        if (
          titleInputEl.value !== "" &&
          categoryInputEl.value !== "" &&
          contentInputEl.value !== ""
        ) {
          addPost(
            ev,
            titleInputEl.value,
            categoryInputEl.value,
            contentInputEl.value
          );
          clearInputFileds();
        }
      });

    function addPost(ev, titleInputEl, categoryInputEl, contentInputEl) {
      // ev.preventDefault();

      const li = elGenerator("li");
      li.setAttribute("class", "rpost");
      const article = elGenerator("article", "", li);
      elGenerator("h4", `${titleInputEl}`, article);
      elGenerator("p", `Category: ${categoryInputEl}`, article);
      elGenerator("p", `Content: ${contentInputEl}`, article);

      const approveBtn = elGenerator("button", "Approve", li);
      approveBtn.setAttribute("class", "action-btn approve");
      // approveBtn.setAttribute("class", "approve");
      const editBtn = elGenerator("button", "Edit", li);
      editBtn.setAttribute("class", "action-btn edit");
      // editBtn.setAttribute("class", "edit");

      reviewUlEl.appendChild(li);

      if (reviewUlEl.children.length !== 0) {
        reviewMessage.style.display = "none";
      }

      approveBtn.addEventListener("click", (ev) => approvePost(ev, article));
      editBtn.addEventListener("click", (ev) =>
        editPost(ev, titleInputEl, categoryInputEl, contentInputEl)
      );
    }

    function editPost(ev, _titleInputEl, _categoryInputEl, _contentInputEl) {
      ev.target.parentNode.remove();

      titleInputEl.value = _titleInputEl;
      categoryInputEl.value = _categoryInputEl;
      contentInputEl.value = _contentInputEl;
    }

    function approvePost(ev, articleEl) {
      ev.target.parentNode.remove();

      const publishedLiEl = document.createElement("li");
      publishedLiEl.className = "rpost";
      publishedLiEl.appendChild(articleEl);
      publishedUlEl.appendChild(publishedLiEl);

      if (publishedUlEl.children.length !== 0) {
        uploadedMessage.style.display = "none";
      }

      if (reviewUlEl.children.length == 0) {
        reviewMessage.style.display = "block";
      }
    }

    function clearPosts() {
      // if (publishedUlEl.children.length > 0) {
      //   publishedUlEl.innerHTML = "";
      //   uploadedMessage.style.display = "block";
      // }
      let postsArray = Array.from(publishedUlEl.children);
      postsArray.forEach((post) => {
        post.remove();
      });
      if (publishedUlEl.children.length == 0) {
        uploadedMessage.style.display = "block";
      }
    }

    function clearInputFileds() {
      titleInputEl.value = "";
      categoryInputEl.value = "";
      contentInputEl.value = "";
    }

    function elGenerator(type, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;

      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }
  }
}
 */



function solve(){
  
  document.getElementById("publish-btn").addEventListener("click", createPost);
  document.getElementById("clear-btn").addEventListener("click", clearPost());
  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let content = document.getElementById("post-content");
  let reviewSection = document.getElementById("review-list");
  let approveSection = document.getElementById("published-list");



  function createPost(event){
    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;

    if(!titleValue || !categoryValue || !contentValue){
      return;
    }

    createDOMElements(titleValue, categoryValue, contentValue);
    clearForm();
  }

  function clearForm(){
    title.value = "";
    category.value = "";
    content.value = "";
  }

  function createDOMElements(titleValue, categoryValue, contentValue){
    let li = document.createElement("li");
    li.classList.add("rpost");

    let article = createArticle(titleValue,categoryValue,contentValue);
    
    let editButton = document.createElement("button");
    editButton.classList.add("action-btn");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editPost());

    let approveButton = document.createElement("button");
    approveButton.classList.add("action-btn");
    approveButton.classList.add("approve");
    approveButton.textContent = "Approve";
    approveButton.addEventListener("click", approvePost());

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);
    reviewSection.appendChild(li);
  }

  function createArticle(titleValue, categoryValue, contentValue){
    let article = document.createElement("article");
    let h = document.createElement("h4");
    h.textContent = titleValue;
    let categoryP = document.createElement("p");
    categoryP.textContent = `Category: ${categoryValue}`;
    
    let contentP = document.createElement("p");
    contentP.textContent = `Content: ${contentValue}`;

    article.appendChild(h);
    article.appendChild(categoryP);
    article.appendChild(contentP);

    return article;
  }

  function editPost(e){
    let currentPost = e.target.parentElement;
    let articleContent = currentPost.getElementsByTagName("article")[0].children;
    
    let titleValue = articleContent[0].textContent;
    let categoryValue = articleContent[1].textContent;
    let contentValue = articleContent[2].textContent;

    title.value = titleValue;
    category.value = categoryValue.split(': ')[1];
    content.value = contentValue.split(': ')[1];
    currentPost.remove();

  }

  function approvePost(e){
    let currentPost = e.target.parentElement;
    approveSection.appendChild(currentPost);
    Array.from(currentPost.querySelectorAll("button").forEach(btn => btn.remove()))
  }

  function clearPost(e){
    Array.from(approveSection.children).forEach(li => li.remove());
  }
}