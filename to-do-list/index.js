
const listElement = document.querySelector('#list');
const inputBoxElement = document.querySelector('#inputBox');
const addButtonElement = document.querySelector('#addButton');

addButtonElement.addEventListener('click', function(){

    const item = inputBoxElement.value;
    if( item !== '' ){
        const newListElement = document.createElement('li');
        newListElement.textContent = item;
        listElement.append(newListElement);

        // Add a class to the newListElement .classList.add('')
        newListElement.classList.add('list-element');

        // Add a click event listener that removes the element.
        newListElement.addEventListener('click', function(){
            newListElement.remove();
        });
        // newListElement.remove();

        inputBoxElement.value= '';
    };
});

inputBoxElement.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        const item = inputBoxElement.value;
        if( item !== '' ){
            const newListElement = document.createElement('li');
            newListElement.textContent = item;
            listElement.append(newListElement);
    
            // Add a class to the newListElement .classList.add('')
            newListElement.classList.add('list-element');
    
            // Add a click event listener that removes the element.
            newListElement.addEventListener('click', function(){
                newListElement.remove();
            });
            // newListElement.remove();
    
            inputBoxElement.value= '';
        };
    }
});

function AddItemToList() {

}
