const buttonElement = document.querySelector('#button');
const textInput = document.querySelector('#text');
const nameElement = document.querySelector('.name');

textInput.addEventListener('keyup', function(r){
    if(r.key==='Enter'){
        console.log('enter')
        if(textInput.value!==''){
        nameElement.textContent = textInput.value
        }}
        
});
buttonElement.addEventListener('click', function(){
    if(textInput.value!==''){
        nameElement.textContent = textInput.value

        
    }
});
