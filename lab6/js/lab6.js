/*
 * Author: Angela Rangel
 * Created: 21 October
 * Licesnse: Public Domain
 */

// Define Variables
myTransport = ["Boyfriend's car", " bus", " walking"
    ];

myMainRide = {
    make: "Chevy",
    model : "Malibu",
    color : "Pink",
    year : 2014,
    age : function() {
      return 2022 - age;
    }
}

// output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
