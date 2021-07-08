
 
  var firebaseConfig = {
    apiKey: "AIzaSyB79lXV8Zo4aoictDGSr2KVYvvBAopEuxI",
    authDomain: "lets-chat-512a9.firebaseapp.com",
    databaseURL: "https://lets-chat-512a9-default-rtdb.firebaseio.com",
    projectId: "lets-chat-512a9",
    storageBucket: "lets-chat-512a9.appspot.com",
    messagingSenderId: "693960435716",
    appId: "1:693960435716:web:b6592add93671ab6976d51"
  };
  
  firebase.initializeApp(firebaseConfig);

 

  user_name=localStorage.getItem("user_name") ;
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!";

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Make a room"
    });
    localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name" + Room_names);
    row="<div class=roomname id="+Room_names+" onclick=Redirecttoroomname(this.id)>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function Redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location="index.html"
}