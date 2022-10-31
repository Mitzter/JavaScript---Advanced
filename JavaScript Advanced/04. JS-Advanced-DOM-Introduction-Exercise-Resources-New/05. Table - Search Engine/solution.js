function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
       let searchElement = document.getElementById('searchField');
       let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
       let searchText = searchElement.value;

       // After every search ("Search" button is clicked), 
       // remove all already selected classes (if any) from the previous search, 
       // for the new search to contain only the new result.
       rowElements.forEach(row => {
           row.className = '';
       });

       // If any of the rows contain the submitted string, 
       // add a class select to that row. Note that more than one row may contain the given string. 
       let filteredRows = rowElements.filter(row => {
           let values = Array.from(row.children);

           if (values.some(td => td.textContent.includes(searchText))) {
               row.className = 'select';
           }
       });

       // After every search ("Search" button is clicked), clear the input field
       searchElement.value = '';
   }
}
