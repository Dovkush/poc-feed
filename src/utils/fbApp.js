import firebase from "firebase"

export const firebaseConfig = {
    apiKey: "AIzaSyBXnJgoPRtmc11FU5Cf1Wdm55Tvn6cG1tI",
    authDomain: "poc-feed.firebaseapp.com",
    projectId: "poc-feed",
    storageBucket: "poc-feed.appspot.com",
    messagingSenderId: "290993717454",
    appId: "1:290993717454:web:eb6925c32c1d606c87109f",
    measurementId: "G-ZRQE6W9XKH"
  };

export const fbApp = firebase.initializeApp(firebaseConfig);