var firebaseConfig = {
      apiKey: "AIzaSyB7xvrFrfkRMJsrqULg6CDglPNrj-DS9Mg",
      authDomain: "kwitter-database-dbd09.firebaseapp.com",
      databaseURL: "https://kwitter-database-dbd09-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-dbd09",
      storageBucket: "kwitter-database-dbd09.appspot.com",
      messagingSenderId: "555674135861",
      appId: "1:555674135861:web:d59053a596b84d6aee707c",
      measurementId: "G-RTK7VG3Y1C"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}