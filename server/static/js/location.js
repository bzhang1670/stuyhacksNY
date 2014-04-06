function getLocation()
{
    if (navigator.geolocation)
    {
	navigator.geolocation.getCurrentPosition(savePosition,showError);
    }
    else{alert("Geolocation is not supported by this browser.");}
}
function savePosition(position)
{
    console.log("in sp");
    $("#lat").val(position.coords.latitude);
    $("#lng").val(position.coords.longitude);
    
    //What one would call 'dasit' (main) in java.
    var baseurl="https://api.foursquare.com/v2/venues/search?";
    var id="client_id=R3KEC5QXX1QAWWVFDJT32RMJF4GP0CBB3PX5D3DIKFJTR0K5";
    var secret="&client_secret=HUO1BXW4Z12ZELV1AGVDSCHV3EE4RVH2EGPFLEKE535VR3JO";
    var version="&v=20140405";
    var ll="&ll=" + $("#lat").val() + ", " + $("#lng").val(); /*40.805, -73.961*/
    //alert($("#lat").val());
    //var radius="&radius=300"
    
    var url = baseurl+id+secret+version+ll//+radius;
    
    //document.write(url);
    
    arr = getlocationArray(url);
    
    var element = getnearestLocation(arr);
    
    //document.write(getnearestLocation(getlocationArray(url)));
    $("#loc_name").val(element.name); 
    $("#loc_id").val(element.id);

}
function showError(error)
{
    switch(error.code) 
    {
    case error.PERMISSION_DENIED:
	alert("User denied the request for Geolocation.")
	break;
    case error.POSITION_UNAVAILABLE:
	alert("Location information is unavailable.")
	break;
    case error.TIMEOUT:
	alert("The request to get user location timed out.")
	break;
    case error.UNKNOWN_ERROR:
	alert("An unknown error occurred.")
	break;
    }
}