  
var config = {
    apiKey: "AIzaSyDKgu6IMSSPjMDymFh_ivaS-rDrWljjluQ",
    authDomain: "hu-safe.firebaseapp.com",
    databaseURL: "https://hu-safe.firebaseio.com",
    projectId: "hu-safe",
    storageBucket: "hu-safe.appspot.com",
    messagingSenderId: "633905449890"
  };
  firebase.initializeApp(config);

 var icons = {
            student:{
                icon:'rsz_student.png'
            },
            guard:{
                icon:'rsz_guard.png',
            }
        }  

var rootRef = firebase.database().ref().child("Users");

  rootRef.on("child_added", snap => {
    var name = snap.child("first_name").val();
    var status = snap.child("status").val();
    var longi = snap.child("longi").val();
    var lati = snap.child("lati").val();

    new google.maps.Marker({
          position: {lat: lati, lng: -77.02},
          map: map, 
          icon: icons.student.icon,
          label:{text: name, color: "Blue"}
        });


  });




  new google.maps.Marker({
          position: {lat: 38.9225, lng: -77.02},
          map: map, 
          icon: icons.student.icon,
          label:{text: "Anish", color: "Blue"}
        });

function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat: 38.9227, lng: -77.01942}
        });

       
        // Add some markers to the map.

        var icons = {
            student:{
                icon:'rsz_student.png'
            },
            guard:{
                icon:'rsz_guard.png'
            }
        }  

        var anish = new google.maps.Marker({
          position: {lat: 38.922038, lng: -77.021542},
          map: map, 
          icon: icons.student.icon,
          label:{text: "Anish", color: "Blue"}
        });
        var saugat = new google.maps.Marker({
          position: {lat: 38.9230, lng: -77.02},
          map: map, 
          icon: icons.student.icon,
          label: {text: "Saugat", color: "blue"}
        });

        var bishwash = new google.maps.Marker({
          position: {lat: 38.925, lng: -77.025},
          map: map, 
          icon: icons.student.icon,
          label:{text: "Bishwash", color: "blue"}
        });

        var student = new google.maps.Marker({
          position: {lat: 38.9267, lng: -77.0277},
          map: map, 
          icon: icons.student.icon,
          label:{text: "Student", color: "blue"}
        });

         var dev = new google.maps.Marker({
          position: {lat: 38.919, lng: -77.019},
          map: map, 
          icon: icons.student.icon,
          label:{text: "Devendra", color: "blue"}
        });

        var guard = new google.maps.Marker({
          position: {lat: 38.920, lng: -77.022},
          map: map, 
          icon: icons.guard.icon,
          label:{text: "Guard", color: "Red"}
        });
    }