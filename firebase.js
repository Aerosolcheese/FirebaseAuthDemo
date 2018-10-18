var app_firebase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvZIPoUYEHxdKfSZ_t_Fh0CKraODFEhWo",
    authDomain: "login-941a0.firebaseapp.com",
    databaseURL: "https://login-941a0.firebaseio.com",
    projectId: "login-941a0",
    storageBucket: "login-941a0.appspot.com",
    messagingSenderId: "635932343137"
  };
  firebase.initializeApp(config);

  app_firebase = firebase;
})() 