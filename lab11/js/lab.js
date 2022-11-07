/*
 * Author: Angela Rangel
 * Email: anvrange@ucsc.edu
 * Date: November 7
 * License: Public Domain
 */

$('#challenges').append('<button id="buttonChale">click me</button>');


$('#problems').append('<button id="buttonProbl")>click me.</button>');

$("#results").append('<button id="buttonResult")>click me.</button>');

$('#buttonChale').click(function(){
  $('#challenges').toggleClass("special");
});

$('#buttonProbl').click(function(){
  $('#problems').toggleClass("specialer");
});

$('#buttonResult').click(function(){
  $('#results').toggleClass("specialest");
});
