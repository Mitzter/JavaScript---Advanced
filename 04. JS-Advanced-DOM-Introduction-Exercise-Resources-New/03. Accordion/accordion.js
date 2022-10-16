function toggle() {
    const button = document.getElementsByClassName('button')[0];
    let paragraph = document.getElementById("extra");
    
    if(button.textContent == 'More'){
        paragraph.style.display = 'block';
        button.textContent = 'Less';
    } else if(button.textContent == 'Less'){
        paragraph.style.display = 'none';
        button.textContent = 'More';
    }
    //This solution has a double clicking issue to display/hide the paragraph
   /*  button.addEventListener("click", moreLess);
    
    function moreLess(e){
        
        if(paragraph.style.display === 'block'){
            paragraph.style.display = 'none';
            button.innerText = "More";
        } else {
            paragraph.style.display = 'block';
            button.innerText = "Less";
        }
    } */
}

