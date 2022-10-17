function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let inputs = Array.from(document.querySelectorAll("tbody > tr"));



   function onClick() {
      let text = document.getElementById("searchField").value;
      for(let item of inputs){
         let itemText = item.innerText;
         for(let i = 0; i < itemText.length; i++){
            let currentSubstring = "";
            for(let j = 0; j < text.length; j++){
               currentSubstring += `${itemText[i + j]}`;
            }
            if(currentSubstring === text){
               item.
               item.classList.add('.select');
            }
         }
      }
      
   }
  
   
}

