import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDdmEtJoIOdWuyMmBr32OaA85qvEQpDWGE",
    authDomain: "social-authentication-e4b98.firebaseapp.com",
    projectId: "social-authentication-e4b98",
    storageBucket: "social-authentication-e4b98.firebasestorage.app",
    messagingSenderId: "397708896250",
    appId: "1:397708896250:web:bb09bdaec43bd86d97a643",
    measurementId: "G-R652SMW2L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Google Login
const googleLoginButton = document.getElementById("google-login-btn");
googleLoginButton.addEventListener("click", () => {

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("hello");
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("bhand mar dya ha ");
    });
});
