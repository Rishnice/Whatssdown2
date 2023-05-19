// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAdYCvV1ysIsAmTTjo6P7D_66JatpCKzEM",
    authDomain: "whatssdown-854df.firebaseapp.com",
    databaseURL: "https://whatssdown-854df-default-rtdb.firebaseio.com",
    projectId: "whatssdown-854df",
    storageBucket: "whatssdown-854df.appspot.com",
    messagingSenderId: "283044872713",
    appId: "1:283044872713:web:b7e4e1e13db67b10016ed8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



