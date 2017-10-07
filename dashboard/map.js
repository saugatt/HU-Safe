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
          position: {lat: 38.9225, lng: -77.02},
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