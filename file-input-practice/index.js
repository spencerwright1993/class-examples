const fileInputElement = document.querySelector('#fileInput');
const uploadButtonElement = document.querySelector('#uploadButton');
const imageOneElement = document.querySelector('#imageOne');

uploadButtonElement.addEventListener('click',function(){
    fileInputElement.click();
})



function fileChanged(e) {
    const file = e.files[0];
 
    const reader = new FileReader();
 
    reader.onload = function(e) {
        const dataUrl = e.currentTarget.result;
        
        imageOneElement.src = dataUrl;
        
        
 
 
    };
 
    reader.readAsDataURL(file);
}