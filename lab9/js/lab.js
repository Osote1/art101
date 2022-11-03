/*
 * Author: Angela Rangel
 * Date: October, 31
 * License: Public Domain
 */

 var outputEL = document.getElementById("output");

 var new1El = document.createElement("p");
 new1El.id = "heyyaa ;";
 new1El.innterhtml = "heyya ;)";

 var new2El = document.createElement("y");
 new2El.id = "xoxo";
 new2El.innerhtml = "xoxo";

 new1El.appendChild(new2El);
 document.getElementById("output")

 console.log("Heloo!", new1El);
 console.log("Adios", new2El);
