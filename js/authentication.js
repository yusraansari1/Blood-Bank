//Firebase AUTHENTICATION

 
function register() {
    const auth = firebase.auth()
    const email = document.getElementById("Email").value
    const password = document.getElementById("PWD").value
    auth.createUserWithEmailAndPassword(email, password).catch(e =>
        
        document.getElementById("errorRegister").innerHTML="***"+ e.message
    )
}


function logIn() {
    
    const auth = firebase.auth();
    const email = document.getElementById("userEmail").value
    const pwd = document.getElementById("userPWD").value
    auth.signInWithEmailAndPassword(email, pwd).catch(e =>
        document.getElementById("errorLogIn").innerHTML="***"+ e.message
        
        
    )
}


function logOut() {
    const auth = firebase.auth();
    auth.signOut().then(function () {
        // Sign-out successful.
        window.location = "indexM.html"
    }).catch(function (error) {
        // An error generated.
        console.log(error.message)
    });
}
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location="donors.html"
        console.log("User Signed In")
    }
});
