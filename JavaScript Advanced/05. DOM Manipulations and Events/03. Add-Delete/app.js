function addItem() {
    let ul = document.getElementById('items');

    let input = document.getElementById('newText')
    let values = input + ' ';

    let li = document.createElement('li');

    let deleteButton = document.createElement('a');
    
    deleteButton.textContent = 'Delete';
    deleteButton.style.color = 'red';

    deleteButton.addEventListener('click', function(event){
        event.target.parentElement.remove();
    });

    li.append(deleteButton);




    ul.append(li);

    input.value = '';
}