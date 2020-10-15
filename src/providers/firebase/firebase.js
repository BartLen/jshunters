import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAndfNndm5-FBV7TjU1h0BrWIQ_plyywCM",
    authDomain: "jshunters.firebaseapp.com",
    databaseURL: "https://jshunters.firebaseio.com",
    projectId: "jshunters",
    storageBucket: "jshunters.appspot.com",
    messagingSenderId: "990821226918",
    appId: "1:990821226918:web:edd431cd4bbd10134d5767"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
    }
}

export default Firebase
