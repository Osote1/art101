/*
 * Author: Angela Rangel
 * Email: anvrange@ucsc.edu
 * Date: November 21
 * License: Public Domain
 */

//enpoint given
 var endpoint = "https://pokeapi.co/api/v2/pokemon/77/"

 function getAPIData(){
   console.log("Running getAPIData")

//pokemon api for AJAXs
$.ajax({
  //API endpoint
  url: "https://pokeapi.co/api/v2/pokemon/77/",
  data: {id: 77},
  type: "GET",
})

//if data suceeds
//data sent backk
.done(function(data){
  console.log("Success:", data);
  $("#output").text(data);
})

//if data request fails
.fail(function(request, error) {
  console.log(request, error);
});
}

//click button
$("#activate").click(getAPIData)
