import firebase from "firebase/app";
import "firebase/auth";



var firebaseConfig = {
    apiKey: "AIzaSyDoTfc29A4L9dXUtqXPjtLvFyTFlQ5Sc04",
    authDomain: "fir-8fbb0.firebaseapp.com",
    projectId: "fir-8fbb0",
    storageBucket: "fir-8fbb0.appspot.com",
    messagingSenderId: "885016568732",
    appId: "1:885016568732:web:065834c0bc57f53794de59",
    measurementId: "G-C6XB7M7KNC"
  };

  const fire= firebase.initializeApp(firebaseConfig);   
  export default fire;
  