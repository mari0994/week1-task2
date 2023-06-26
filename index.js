const button = document.querySelector('.add-task');
const input = document.querySelector('#task');
const list = document.querySelector('.task-list');

button.addEventListener('click', function(){
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    list.append(listItem);
    input.value = '';
})

list.addEventListener('click', function(event){
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('crossed');
    }
})
