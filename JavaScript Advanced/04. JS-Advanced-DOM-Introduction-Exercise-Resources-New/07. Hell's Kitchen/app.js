function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);

      for(let data of input){
         let [name, workerList] = data.split(" - ");
         if(XPathResult.FIRST_ORDERED_NODE_TYPE())
      }
      
   }
}