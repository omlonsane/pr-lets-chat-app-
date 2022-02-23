

var firebaseConfig = {
      apiKey: "AIzaSyBvSTXSWxe_-0mJjBEZnO73NRB-YBYeJPY",
      authDomain: "kwitter-c187c.firebaseapp.com",
      databaseURL: "https://kwitter-c187c-default-rtdb.firebaseio.com",
      projectId: "kwitter-c187c",
      storageBucket: "kwitter-c187c.appspot.com",
      messagingSenderId: "482188645612",
      appId: "1:482188645612:web:f6d6361b16fade4349c1c9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome-"+user_name+"!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name "
});
localStorage.setItem("room_name", room_name );
window.location="kwitter_page.html";


}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("room_name"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML=row;


      //End code
      });});}
getData();


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

