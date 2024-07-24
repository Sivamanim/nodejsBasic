function timeZoneBasedLocalTime(country,timezone){

  

    const nDate = new Date().toLocaleString('en-US', {
        timeZone: timezone
      });
      
      console.log(country + " Local Time Now:" + nDate);
       
}

var TZ = 'America/New_York';
var country = 'New York';

timeZoneBasedLocalTime(country,TZ);

TZ = 'Asia/Kolkata';
country = 'Inida';
timeZoneBasedLocalTime(country ,TZ);

