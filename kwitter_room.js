
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAc4cNdj-9Ol_FrBdzw6l2gv4sX-hBBYzY",
      authDomain: "kwitter-6730f.firebaseapp.com",
      databaseURL: "https://kwitter-6730f-default-rtdb.firebaseio.com",
      projectId: "kwitter-6730f",
      storageBucket: "kwitter-6730f.appspot.com",
      messagingSenderId: "570547043300",
      appId: "1:570547043300:web:e4ec4a40fb96f10cbfa5f1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem;
    document.getElementById("user_name").innerHTML ="Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;

      //End code

      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
      purpose : "add room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";


}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_names",name);
      window.localStorage ="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="kwitter.html";  
}

