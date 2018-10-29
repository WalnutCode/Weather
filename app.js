$(document).ready(function(){


var alert = ["primary", "secondary", "success", "danger", "info"]
var dateAlert;
var styleAlert;
console.log("Hi")
$(".submit").on("click",function(event){
  event.preventDefault()
  console.log("submit button clicked")
  var yourCity = $("#exampleFormControlInput1").val().trim()
  $.ajax({
    url: "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=5913c4c25fb74c86bbe133215180710&q="+yourCity+"&format=json&num_of_days=5",
    
  })
    .done(function( response ) {
      //console.log(response.data.weather)
      var weather = response.data.weather
      var date = 0
      for (var i = 0; i < weather.length; i++){
          //console.log(weather[i])
          //console.log("date "+weather[i].date)
          date = weather[i].date
          dateAlert = weather[i].date
          for (var a = 0; a < alert.length; a++){
            //console.log (alert[a])
            styleAlert = alert[a]
            //console.log(dateAlert)
          } 
          $(".NYCWeather").append("<div class='alert alert-primary role='alert'>Date: "+dateAlert+ "</div>")
          //console.log("temperature " +weather[i].mintempF +"-"+ weather[i].maxtempF)
          $(".NYCWeather").append("<div> Temperature: "+weather[i].mintempF +"-"+ weather[i].maxtempF+"</div>")
          var sun = weather[i].astronomy
        for (var ind=0; ind<sun.length; ind++){
            console.log("Sunrise "+ sun[ind].sunrise + " Sunset " + sun[ind].sunset)
            //$("body").html(sun[ind].sunrise)
        }
      }
      
    });
  console.log($("#exampleFormControlInput1").val())
})  

  });