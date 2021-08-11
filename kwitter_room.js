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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });
      });
      }
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";    
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

