//step 1:Add click event handler with the submit button

document.getElementById('submit').addEventListener('click', function () {
    //step 2: get the email address inside the email input field

    //!!always remember to use .value to get text from an input field
    const getEmail = document.getElementById('email');
    const email = getEmail.value;


    // step 3: Get password
    const getPassword = document.getElementById('password');
    const password = getPassword.value;


    //DANGER:: DO NOT CHECK OR VERIFY EMAIL LIKE THIS

    //step 4: verify email add password
    if (email === 'shakilkhan496@gmail.com' && password === 'qwer1234') {

        location.href = 'bank.html';
    }
    else {
        alert('Please enter email and password in right way')
    }



})