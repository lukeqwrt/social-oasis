const db = firebase.firestore();
const auth = firebase.auth();
const signupForm = document.querySelector('#form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.querySelector('#validationShow')

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    const confirmPassword = signupForm['confirmPassword'].value
    if(password != confirmPassword){
        p.style.display = "block"
    }else{
        // signup the user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            // 
            
            return db.collection('users').doc(cred.user.uid).set({
                name: signupForm['name'].value,
                confirmPassword: signupForm['confirmPassword'].value
            });
        }).then(() => {
            window.location.href = "/home.html"
            signupForm.querySelector('.error').innerHTML = '';
        }).catch(err => {
            signupForm.querySelector('.error').innerHTML = err.message;
        })
    }



})





//login 
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const LoginEmail = loginForm['LoginEmail'].value
    const LoginPassword = loginForm['LoginPassword'].value

    auth.signInWithEmailAndPassword(LoginEmail, LoginPassword).then(cred => {
        console.log(cred.user)
    }).then( () => {
        window.location.href = "/home.html"
        loginForm.querySelector('.error').innerHTML = "";
    }).catch(err => {
        loginForm.querySelector('.error').innerHTML = err.message;
    })
})

const main = document.querySelector('#main')

auth.onAuthStateChanged(user => {
    if(user){
        // window.location.href = "/index.html"
        
    }else{
  
    }
})
