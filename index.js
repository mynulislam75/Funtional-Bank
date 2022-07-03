console.log(1234)

// Getting email id
const emailId = document.getElementById('email-id');
// Getting password id
const passwordId = document.getElementById('password-id');
// Get button id
const buttonId = document.getElementById('button-id')

// Addeventlistner on button
buttonId.addEventListener('click', function () {
  console.log(999)
  emailValue = emailId.value;
  passwordValue = passwordId.value;

  if (emailValue == 'abcd@gmail.com' && passwordValue == '1234abcd') {
    window.location.href = 'banking.html';
    console.log('okkk')
  }
  else if (emailValue !== 'enter@gmail.com' || passwordValue !== 'enter1234') {
    alert('Please enter right email and password');
    emailId.value = '';
    passwordId.value = '';
    return;
  }

  // clear email and password field
  emailId.value = '';
  passwordId.value = '';
})
