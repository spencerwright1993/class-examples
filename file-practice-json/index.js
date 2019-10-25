const firstNameElement = document.querySelector('#firstName');
const lastNameElement = document.querySelector('#lastName');
const ageElement = document.querySelector('#age');
const favoriteFoodElement = document.querySelector('#favoriteFood');
const favoriteDjElement = document.querySelector('#favoriteDj');
const favoriteHobbyElement = document.querySelector('#favoriteHobby');
const submitButtonElement = document.querySelector('#submitButton')



function fileChanged(e) {
    const file = e.files[0];
 
    const reader = new FileReader();
 
    reader.onload = function(e) {
        const jsonString = e.currentTarget.result;
        const obj = JSON.parse(jsonString);
 
        firstNameElement.value = obj.firstName;
        lastNameElement.value = obj.lastName;
        ageElement.value = obj.age;
        favoriteFoodElement.value = obj.favoriteFood;
        favoriteHobbyElement.value = obj.favoriteHobby;
        favoriteDjElement.value = obj.favoriteDj;
    
    };
 
    reader.readAsText(file);
}

submitButtonElement.addEventListener('click', function(){
    const payload = {
        firstName: firstNameElement.value,
        lastName: lastNameElement.value,
        age: ageElement.value,
        favoriteFood: favoriteFoodElement.value,
        favoriteHobby: favoriteHobbyElement.value,
        favoriteDj: favoriteDjElement.value,
    };

    const json = JSON.stringify(payload);

    debugger;

    // Send json to some server...
});