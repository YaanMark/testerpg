import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

var emailInput = document.getElementById('emailInput');
var passInput = document.getElementById('passInput');
var loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function(){
    const auth = getAuth();
createUserWithEmailAndPassword(auth, emailInput.value, passInput.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("Conta criada");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
});