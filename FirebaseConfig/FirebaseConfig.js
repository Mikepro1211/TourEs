import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {   
    apiKey: "AIzaSyAQEQDjvt6koS9bT16dFtgNRGgSViQ_wd4",
    authDomain: "toures-527e0.firebaseapp.com",
    projectId: "toures-527e0",
    storageBucket: "toures-527e0.appspot.com",
    messagingSenderId: "356510774692",
    appId: "1:356510774692:web:bf5991e62b5f45196a7d31",
    measurementId: "G-1NB9VEZ2LS"
 }

 //initiaalize Firebase 
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export default firebaseConfig;