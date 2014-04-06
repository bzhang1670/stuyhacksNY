function fslocation(name, distance, id) {
  this.name = name;
  this.distance = distance;
  this.id = id;
};

var getlocationArray = function(url) {

  locArr = new Array();

  $.ajax({
    url: url,
    dataType: 'json',
    async: false,
    success: function(data) {

      $.each(data.response.venues, function (i,venues) {
        content = "<p>" + " name: " + venues.name + " |     distance: " + venues.location.distance + " |     id: " + venues.id  + "</p>";
        var loc = new fslocation(venues.name, venues.location.distance, venues.id);
        locArr.push(loc);
        $(content).appendTo("#names");
      });
    }
  })

  /*$.getJSON(url, function(data) {

    $.each(data.response.venues, function (i,venues) {
      content = "<p>" + " name: " + venues.name + " |     distance: " + venues.location.distance + " |     id: " + venues.id  + "</p>";
      var loc = new fslocation(venues.name, venues.location.distance, venues.id);
      locArr.push(loc);
      $(content).appendTo("#names");
    });

  });*/
  return locArr;
}

  //This will loop through a location array
  var getnearestLocation = function(loray) {
    var minhelper = loray;
    var min = minhelper[0];
    for(var i = 1; i < minhelper.length; i++) {
      if(minhelper[i].distance < min.distance) {
       min=minhelper[i];
     }
   }
   return min;
 }

 window.onload=function(){
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(pos){
    alert("Latitude: "+pos.coords.latitude+"\nLongitude: "+pos.coords.longitude);
  }

 
  //What one would call 'dasit' (main) in java.
  var baseurl="https://api.foursquare.com/v2/venues/search?";
  var id="client_id=R3KEC5QXX1QAWWVFDJT32RMJF4GP0CBB3PX5D3DIKFJTR0K5";
  var secret="&client_secret=HUO1BXW4Z12ZELV1AGVDSCHV3EE4RVH2EGPFLEKE535VR3JO";
  var version="&v=20140405";
  var ll="&ll=" + $("#lat").val() + ", " + $("#lng").val(); /*40.805, -73.961*/
  //var radius="&radius=300"

  var url = baseurl+id+secret+version+ll//+radius;

  document.write(url);
  
  arr = getlocationArray(url);

  var element = getnearestLocation(arr);

  //document.write(getnearestLocation(getlocationArray(url)));
  $("#loc_name").val(element.name); 
  $("#loc_id").val(element.id);

