const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyAAQbRIgfd6ExaHtGsvFatHaQpdISOIUSw",
    authDomain: "joshan-e2f6a.firebaseapp.com",
    projectId: "joshan-e2f6a",
    storageBucket: "joshan-e2f6a.appspot.com",
    messagingSenderId: "530273022318",
    appId: "1:530273022318:web:448b3983a5030caac3517f",
    measurementId: "G-W1331G5Q0D"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const regi = () => {
const username = document.getElementById('Username').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value

auth.createUserWithUsernameAnddEmailAndPassword(Username ,email, password)
.then((res)  => {
    console.log(res.user)
}) 
.catch((err) => {
    console.log(err.code)
    console.log(err.message)
})
}