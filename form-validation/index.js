function submitForm(event) {
    event.preventDefault();
    // Get Values from HTML inputs elements
    let isFormValid = true;

    
    const firstNameElement = document.querySelector('#firstName')
    const firstName= firstNameElement.value;
    
    const lastNameElement = document.querySelector('#lastName')
    const lastName = lastNameElement.value;
    
    const emailElement = document.querySelector('#email')
    const email = emailElement.value;
   
    const ageElement = document.querySelector('#age')
    const age = ageElement.value;
    
    const eighteenOrOlderElement = document.querySelector('#eighteenOrOlder')
    const eighteenOrOlder = eighteenOrOlderElement.value;

    const passwordElement = document.querySelector ('#password');
    const passsword = passwordElement.value;
    const passwordConfirmElement = document.querySelector('#passwordConfirm');
    const passwordConfirm = passwordConfirmElement.value;
    
    // Remove errors
    firstNameElement.classList.remove('error');
    lastNameElement.classList.remove('error')
    emailElement.classList.remove('error')
    ageElement.classList.remove('error');
    eighteenOrOlderElement.classList.remove('error');
    passwordElement.classList.remove('error');
    passwordConfirmElement.classList.remove('error');

    // Validate all values
    if(firstName === '') {
        
        // firstName is NOT valid.

        // Highlight the firstName input box to red;
        firstNameElement.classList.add('error');
        isFormValid = false;
    }

    if(lastName === '') {
        
        // lastName is NOT valid.

        // Highlight the lastName input box to red;
        lastNameElement.classList.add('error');
        isFormValid = false;
    }

    const numberAge = Number(age);

    if(age === '' || isNaN(numberAge) || numberAge <0) {
        // age validation failed.

        //highlight the age input box to red;
        ageElement.classList.add('error');
        isFormValid = false;
    }

    const isEmailValid = emailIsValid(email);

    if(!isEmailValid) {
        // The email is invalid
        emailElement.classList.add('error')
        isFormValid = false;
    }

    if(eighteenOrOlder !== 'true' && eighteenOrOlder !== 'false') {
        eighteenOrOlderElement.classList.add('error');
        isFormValid = false;
    }

    if(eighteenOrOlder === 'true' && age < 18) {
        ageElement.classList.add('error');
        eighteenOrOlderElement.classList.add('error');
        isFormValid = false;
          
    }
    if(password === '' || passwordConfirm === '') {
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }
 
    if(password.length < 8 || passwordConfirm.length < 8) {
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }
 
    if(password !== passwordConfirm) {
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }
    if(isFormValid){
        alert('Submission Successful')
    }
    else{
        alert('Submission Failed. Resistance is Futile')
    }

     // If Form is Valid, submit to server;


    // If Form is Not Valid, Show an error;   
}

function emailIsValid (email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
 
    return isValid;
}


