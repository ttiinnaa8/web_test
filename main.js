function initMap() {
  var Taiwan = { lat: 23.97565, lng: 120.973881944444 };
  var highway_coor_lat = [24.251491000000001, 24.195640000000001, 23.159483999999999, 23.216488000000002, 23.159483999999999, 23.216488000000002, 24.251491000000001, 24.195640000000001, 23.569887999999999, 24.029285000000002, 24.195640000000001, 24.251491000000001, 24.023800000000001, 23.159483999999999, 23.216488000000002, 23.569887999999999, 24.035654999999998, 23.813020999999999,
    23.179205, 24.251491000000001, 24.195640000000001, 23.159483999999999, 23.216488000000002, 23.159483999999999, 23.216488000000002, 24.251491000000001, 24.195640000000001, 23.569887999999999, 24.029285000000002, 24.195640000000001, 24.251491000000001, 24.023800000000001, 23.159483999999999, 23.216488000000002, 23.569887999999999, 24.035654999999998, 23.813020999999999, 23.179205]
  var highway_coor_lon = [121.16924299999999, 121.30365500000001, 120.75933700000002, 121.01954099999999, 120.75933700000002, 121.01954099999999, 121.16924299999999, 121.30365500000001, 120.89231200000002, 121.17594099999999, 121.30365500000001, 121.16924299999999, 121.18070700000001, 120.75933700000002, 121.01954099999999, 120.89231200000002, 121.185975, 120.850477, 120.78046999999999,
    121.16924299999999, 121.30365500000001, 120.75933700000002, 121.01954099999999, 120.75933700000002, 121.01954099999999, 121.16924299999999, 121.30365500000001, 120.89231200000002, 121.17594099999999, 121.30365500000001, 121.16924299999999, 121.18070700000001, 120.75933700000002, 121.01954099999999, 120.89231200000002, 121.185975, 120.850477, 120.78046999999999]
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: Taiwan
  });
  for (i = 0; i <highway_coor_lat.length ;i++) {
    var coor = { lat: highway_coor_lat[i] , lng: highway_coor_lon[i] };
    var marker = new google.maps.Marker({
      position: coor,
      map: map
    });
  }

  

function test(){
  var myArray = [[1,2,3],[4,5,6],[7,8,9]]; 
  var t = document.getElementById("table1"); 
  for(var i=0;i<myArray.length;i++) { 
     t.insertRow(); 
     for(var j=0;j<myArray[i].length;j++) { 
        t.rows[i].insertCell(j); 
        t.rows[i].cells[j].innerText = myArray[i][j]; 
     }    
  } 
}

