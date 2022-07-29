import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

var loginBtn = document.getElementById('login__btn');
var passInput = document.getElementById('pass__input');
var emailInput = document.getElementById('email__input');

loginBtn.addEventListener('click', function(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailInput.value, passInput.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Usuário Logado")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
});