/*
 * Author: Angela Rangel
 * Created: 24 October
 * Licesnse: Public Domain
 */

 // sortUserName - a function that takes user input and
 //sorts the letters
 function sortUserName() {
      var userName = window.prompt("Hi! Please tell me your name so I can fix it!");
      console.log("UserName =", userName);
      var nameArray = userName.split('');
      console.log("nameArray =", nameArray);
      var nameArraySort = nameArray.sort();
      console.log("nameArraySort =", nameArraySort);
      var nameSorted = nameArraySort.join('');
      console.log("nameSorted =", nameSorted);
      return nameSorted;
 }

 // Script output
 document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
