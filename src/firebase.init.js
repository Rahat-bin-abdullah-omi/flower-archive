// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };
const firebaseConfig = {
    apiKey: "AIzaSyDSusC_W3sDA9Me0SXuakaWlxRMourT0X0",
    authDomain: "flouriest-archive.firebaseapp.com",
    projectId: "flouriest-archive",
    storageBucket: "flouriest-archive.appspot.com",
    messagingSenderId: "1095905248796",
    appId: "1:1095905248796:web:287ecabc6746e21fd941d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth