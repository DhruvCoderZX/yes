var firebaseConfig = {
    apiKey: "AIzaSyBQbqw3YojK3chfr19FDwlAgPozDOVie3A",
    authDomain: "dhruv-7b6ea.firebaseapp.com",
    databaseURL: "https://dhruv-7b6ea-default-rtdb.firebaseio.com",
    projectId: "dhruv-7b6ea",
    storageBucket: "dhruv-7b6ea.appspot.com",
    messagingSenderId: "259308553803",
    appId: "1:259308553803:web:11d8c114a9d516bc8a6fce",
    measurementId: "G-2833B17K1B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value ;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });

  }     
  // firebase=refrense
  //database=adding data
  //refere to add the data
  // /= adduser name in the root
  //child(username)= name fo rthe folder
  //username= the username 
  //update= updatinf the database with values
  // purpose= keyword
  // purpose: "adding user"= key:"value"