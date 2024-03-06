
               // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

              // Import the necessary Firebase modules
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';
              
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgGXJoqe-stLcxVS7uERM6l3SOtu1Ez5Y",
    authDomain: "gera-6e9ee.firebaseapp.com",
    projectId: "gera-6e9ee",
    storageBucket: "gera-6e9ee.appspot.com",
    messagingSenderId: "331888265233",
    appId: "1:331888265233:web:22f3ec6417d6b8ff3a49b0"
};








let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};























let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let heihgt = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heihgt){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });

        };

    });



let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);







menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};
const divloginRegister = document.getElementById('loginRegister');
const divbg_Register = document.getElementById('bg_Register');

// login container
document.getElementById('premiumbtn').addEventListener('click', function() {
    divloginRegister.style.display = "flex";
});

document.getElementById('cancelLogin').addEventListener('click', function() {
    divloginRegister.style.display = "none";
});


document.getElementById('nextToregister').addEventListener('click', function() {
    divbg_Register.style.display = "flex";
    divloginRegister.style.display = "none";

});
document.getElementById('cancelregister').addEventListener('click', function() {
    divbg_Register.style.display = "none";
    divloginRegister.style.display = "flex";

});



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form elements
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginSpinner = document.getElementById("imgLoginSpeen");
const loginMessage = document.getElementById("loginmessage");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show the spinner while login is in progress
    loginSpinner.style.display = "flex";
    loginMessage.style.display = "none"; // Hide any previous messages

    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        

        // Display a success message
        loginMessage.innerText = "Login was successful!";
        loginMessage.classList.remove("error");
        loginMessage.classList.add("success");
            window.location.replace("home.html");

    } catch (error) {
        // Display an error message
        loginMessage.innerText = "Login failed. Error: " + error.message;
        loginMessage.classList.remove("success");
        loginMessage.classList.add("error");
    } finally {
        // Hide the spinner when the login process is completed (success or failure)
        loginSpinner.style.display = "none";
        loginMessage.style.display = "flex"; // Show the message
    }
});






const registerForm = document.getElementById("register-form");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerName = document.getElementById("register-name");

const registerSpinner = document.getElementById("register-spinner");
const registerMessage = document.getElementById("register-message");





registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show the spinner while registration is in progress
    registerSpinner.style.display = "flex";
    registerMessage.style.display = "none"; // Hide any previous messages

    const email = registerEmail.value;
    const password = registerPassword.value;
    const name = registerName.value; // Get user's name
    
    // Simple form validation
    if (!email || !password || !name) {
        // Display an error message if any field is empty
        registerMessage.innerText = "Please fill out all fields.";
        registerMessage.style.color = "rgb(255, 164, 164)";
        registerSpinner.style.display = "none";
        registerMessage.style.display = "block";
        return; // Stop further execution
    }

    try {
        // Register the user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update the user's profile with additional data
        await updateProfile(user, {
            displayName: name
        });

        // Save user data to Firestore
        const firestore = getFirestore(app);
        const collectionName = "users"; // Specify the Firestore collection name

        const userData = {
            email: email,
            name: name,
            password: password
            // Add more user data fields as needed
        };

        const userDocRef = doc(firestore, collectionName, user.uid);

        await setDoc(userDocRef, userData);

        // Display a success message
        registerMessage.innerText = "Registration was successful!";
        registerMessage.style.color = "rgb(123, 255, 79)";

    } catch (error) {
        // Display an error message
        registerMessage.innerText = "Registration failed. Error: " + error.message;
        registerMessage.style.color = "rgb(255, 164, 164)";
    } finally {
        // Hide the spinner when the registration process is completed (success or failure)
        registerSpinner.style.display = "none";
        registerMessage.style.display = "block"; // Show the message
    }
});




// ------------------------------------------------ </REGISTER ---------------------------------------

